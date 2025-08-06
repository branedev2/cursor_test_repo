import torch
import logging
from PIL import Image, ImageFile
ImageFile.LOAD_TRUNCATED_IMAGES = True
from transformers import VisionEncoderDecoderModel
from wts_image_attribute_extraction_models_inference_docker.utils.models.magicLM.process import \
    textual_data_for_generative, padder
from wts_image_attribute_extraction_models_inference_docker.utils.models.magicLM.post_process import format_output, \
    post_processor_generative, get_output_dict_generative, geometric_mean
from wts_image_attribute_extraction_models_inference_docker.utils.models.magicLM.pre_process import load_encoder_decoder_models
from wts_image_attribute_extraction_models_inference_docker.constants import meta_constants, variable_constants

logger = logging.getLogger(__name__)


class LayoutLMGenLit(torch.nn.Module):
    def __init__(self, processor_path, layoutlm_path, num_beams = 1, max_length = 20):
        super().__init__()
        self.layoutlm_processor, self.layoutlm_model, self.decoder_model, self.tokenizer = load_encoder_decoder_models(
            processor_path, layoutlm_path)
        self.layoutlm_generative = VisionEncoderDecoderModel(
            encoder=self.layoutlm_model, decoder=self.decoder_model)
        self.layoutlm_generative.config.decoder_start_token_id = 0
        self.layoutlm_generative.config.pad_token_id = 1
        self.extra_id_to_idx_mapping = {}
        self.idx_to_extra_id_mapping = {}
        self.extra_id_indexes = None
        self.num_beams = num_beams
        self.max_length = max_length

    def forward(self, **x):
        layoutlm_input = {k: x[k] for k in x if k != 'labels'}
        encoder_outputs = self.layoutlm_generative.encoder(**layoutlm_input)
        output = self.layoutlm_generative.generate(**{'encoder_outputs': encoder_outputs}, num_beams=self.num_beams, max_length=self.max_length,
                                                   return_dict_in_generate=True, output_scores=True)
        return output

    def predict(self, encoding):
        out = self.forward(**encoding)
        return out


class LayoutLMGenerativeProcess(LayoutLMGenLit):
    def __init__(self, processor_name, layoutlm_base_path):
        super().__init__(processor_name, layoutlm_base_path)
        self.layoutlmGenerative = LayoutLMGenLit(processor_name, layoutlm_base_path)
        self.load_model(meta_constants.GENERATIVE_MODEL_PATH)
        self.initialize_extra_tokens()

    def load_model(self, model_path):
        try:
            checkpoint = torch.load(model_path, map_location=torch.device('cpu'))
            self.layoutlmGenerative.load_state_dict(checkpoint['state_dict'], strict=False)
#{fact rule=pytorch-disable-gradient-calculation@v1.0 defects=1}
            self.layoutlmGenerative.eval()
#{/fact}
            logger.info("Generative model loaded successfully from {}".format(model_path))
        except:
            print("Failed to load Generative Model from {}".format(model_path))

    def initialize_extra_tokens(self):
        for i in range(variable_constants.NUM_NEW_EXTRA_IDS):
            self.extra_id_to_idx_mapping['extra_id_{}'.format(i)] = \
                self.tokenizer.convert_tokens_to_ids(self.tokenizer.tokenize('<extra_id_{}>'.format(i)))[0]
            self.idx_to_extra_id_mapping[
                self.tokenizer.convert_tokens_to_ids(self.tokenizer.tokenize('<extra_id_{}>'.format(i)))[
                    0]] = 'extra_id_{}'.format(i)
        self.extra_id_indexes = list(self.extra_id_to_idx_mapping.values())

    def get_ids_from_sentence(self, sentence):
        tokenized = self.tokenizer.tokenize(sentence)
        try:
            idx_pad = tokenized.index('<pad>')
            return self.tokenizer.convert_tokens_to_ids(tokenized[:idx_pad])
        except:
            return self.tokenizer.convert_tokens_to_ids(tokenized)

    def add_question_to_input(self, input_ids, question_atts):
        last_index = int((torch.tensor(input_ids) == variable_constants.END_TOKEN_IDX).nonzero(as_tuple=True)[0][0]) + 1
        last_index = min(last_index, variable_constants.TEXT_CONTEXT_MAX_LEN)
        j = last_index
        for i, att in enumerate(question_atts):
            att_tokens = self.get_ids_from_sentence(att + " ")
            input_ids[j] = self.extra_id_to_idx_mapping['extra_id_{}'.format(i)]
            j += 1
            for x in att_tokens:
                input_ids[j] = x
                j += 1
        input_ids[j:] = [1] * (variable_constants.TEXT_INP_MAX_LEN - j)
        return input_ids

    def return_encoding(self, image_path, ocr_tokens, question_atts):
        image = [Image.open(image_path).convert("RGB")]
        textual_data = textual_data_for_generative(ocr_tokens)
        words = [word.lower() for word in textual_data['words']]
        encoding = self.layoutlm_processor(image, words, boxes=textual_data['boxes'], truncation=True,
                                           padding="max_length", max_length=variable_constants.TEXT_INP_MAX_LEN)

        input_ids, bbox = encoding['input_ids'], encoding['bbox']
        input_ids = padder(input_ids, variable_constants.TEXT_INP_MAX_LEN, 1)

        input_ids = self.add_question_to_input(input_ids, question_atts)
        attention_ids = padder([1] * len(input_ids), variable_constants.TEXT_INP_MAX_LEN, 0)
        bbox = padder(bbox, variable_constants.TEXT_INP_MAX_LEN, [0, 0, 0, 0])
        pixel_values = encoding['pixel_values']

        encoding = {
            'input_ids': torch.Tensor([input_ids]).long(),
            'attention_mask': torch.Tensor([attention_ids]).long(),
            'bbox': torch.Tensor([bbox]).long(),
            'pixel_values': torch.Tensor(pixel_values),
        }
        return encoding, image, question_atts

    def prediction_confidence_dict(self, sequences, scores, extra_id_to_att_mapping):
        prediction_to_confidence = {att: [] for att in list(extra_id_to_att_mapping.values())}
        extra_id = None
        confidence_scores = []
        cur_vals = []
        for i, token_id in enumerate(sequences):
            if i == 0:
                extra_id = self.idx_to_extra_id_mapping[int(token_id)]
            elif int(token_id) in self.extra_id_indexes:
                if '<{}>'.format(extra_id) in extra_id_to_att_mapping:
                    prediction_to_confidence[extra_id_to_att_mapping['<{}>'.format(extra_id)]] = confidence_scores
                extra_id = self.idx_to_extra_id_mapping[int(token_id)]
                confidence_scores = []
                cur_vals = []
            elif int(token_id) == variable_constants.SEMICOLON_IDX:  # not ;
                confidence_score = geometric_mean(cur_vals)
                confidence_scores.append(confidence_score)
                cur_vals = []
            elif int(token_id) != variable_constants.SPACE_IDX:  # not space
                pred_token_score = torch.softmax(scores[i - 1], dim=1).max()
                cur_vals.append(pred_token_score)
        if '<{}>'.format(extra_id) in extra_id_to_att_mapping:
            prediction_to_confidence[extra_id_to_att_mapping['<{}>'.format(extra_id)]] = confidence_scores
        return prediction_to_confidence

    def get_confidence_and_output_dict(self, out, question_atts):
        extra_id_to_att_mapping = {'<extra_id_{}>'.format(i): att for i, att in enumerate(question_atts)}
        try:
            last_index = int((out.sequences[0] == 2).nonzero(as_tuple=True)[0][0])
        except Exception as e:
            last_index = len(out.sequences[0])
            logger.info('End token not found in prediction {} - {}'.format(e, self.layoutlm_processor.decode(out.sequences[0])))
        start_index = 2
        scores = out.scores[start_index:last_index]
        sequences = out.sequences[0][start_index:last_index]
        pred_tokens = self.layoutlm_processor.decode(sequences)
        logger.info(pred_tokens)
        out_dict, confidence_dict = dict(), dict()
        try:
            out_dict = get_output_dict_generative(pred_tokens, extra_id_to_att_mapping)
            confidence_dict = self.prediction_confidence_dict(sequences, scores, extra_id_to_att_mapping)
        except Exception as e:
            logger.info('Failed to generate output and confidence dictionary')
            logger.info('Pred tokens - {}, Exception - {}'.format(pred_tokens, e))
        return out_dict, confidence_dict

    def predictor(self, image_path, ocr_tokens, question_atts):
        try:
            encoding, image, question_atts = self.return_encoding(image_path, ocr_tokens, question_atts)
            out = self.layoutlmGenerative.predict(encoding)
            out_dict, confidence_dict = self.get_confidence_and_output_dict(out, question_atts)
            out_dict = post_processor_generative(out_dict, confidence_dict)
            out_dict = format_output(out_dict)
            logger.info(out_dict)
            return out_dict
        except Exception as e:
            logger.info('Failed in generative predictor - {}'.format(e))
            return {}
