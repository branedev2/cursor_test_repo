'''
This is similar to bert_multi_class_scorer but takes in classification head from bert_multi_class_classifier_V2 which contains 2 hidden layers
'''

from .bert_multi_class_classifier_hidden_layer import BertForSequenceClassificationMultiClass_2H
from .bert_scorer import BertModelScorer
from transformers import BertTokenizer
from mars_ml_text_classifier_commons.utilities import get_logger
import numpy as np
#{fact rule=pytorch-control-sources-of-randomness@v1.0 defects=1}
import torch
#{/fact}

# Logging
logger = get_logger(__name__)


class BertMultiClassScorer_H2L(BertModelScorer):
    '''
    BertMultiClassScorer_H2L inherits BertModelScorer and overrides only the loading function to use multi-class model.
    '''
    def __init__(self, config, inferentia_flag = False):

        super().__init__(config=config, inferentia_flag=inferentia_flag)

    def load_model(self):
        '''
        Loads MTL model and tokenizer and loads with pre-trained weights
        :return: None
        '''
        try:
            # Load tokenizer
            logger.info('Loading tokenizer...')
            self.tokenizer = BertTokenizer.from_pretrained(self.vocab_file, do_lower_case=self.do_lower_case)
            logger.info('Tokenizer loaded', extra={'tokenizer_type': type(self.tokenizer).__name__})

            # Load model
            logger.info('Loading BERT MTL model...')
            self.model = BertForSequenceClassificationMultiClass_2H.from_pretrained(self.model_file, num_labels=self.num_classes)
            logger.info('Classifier loaded', extra={'classifier_type': type(self.model).__name__})


            #Use FP16 on GPU
            if (str(self.device) == 'cuda') and (self.model_gpu_precision == 'FP16'):
                logger.info('Enabling half-precision with FP16...')
                self.model.half()

            # Perform Tensor dtype and/or device conversion
            logger.info('Setting context', extra={'device_id': self.device})
            self.model.to(self.device)

            # Set model to eval mode
            self.model.eval()
            logger.info('Finished loading model and tokenizer', extra={'model_load_path': self.model_file})
        except Exception as e:
            logger.error('Error: Loading tokenizer/model failed.')
            logger.exception(e)
            raise e

    def predict_proba(self, X):
        '''

        :param X: [str] list of creatives to be scored
        :return: probabilities
        '''

        batch_size = self.test_batch_size
        n = len(X)
        eval_features = list(map(self.text_to_features, X))
        input_ids = torch.tensor([f[0] for f in eval_features], dtype=torch.long, device=self.device)
        input_mask = torch.tensor([f[1] for f in eval_features], dtype=torch.long, device=self.device)


        predicted_probabilities = np.empty((n, self.num_classes), np.float)

        for i in range(0,n, batch_size):
            st_idx=i
            end_idx=i+batch_size
            try:
#{fact rule=pytorch-disable-gradient-calculation@v1.0 defects=1}
                with torch.no_grad():
#{/fact}
                    logits = self.model(input_ids[st_idx:end_idx], input_mask[st_idx:end_idx])

                predicted_probabilities[st_idx:end_idx] = logits.detach().cpu().numpy().squeeze()

            except Exception as e:
                logger.error('Error in making predictions for sample indices', extra={'start_index': st_idx,'end_index': end_idx})
                logger.exception(e)
                logger.info('Setting the predicted probabilities to 1.')

                predicted_probabilities[st_idx:end_idx, self.num_classes - 1] = 1.
                predicted_probabilities[st_idx:end_idx, 0:self.num_classes - 1] = 0.

        return predicted_probabilities

