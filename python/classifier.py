import os
import torch

import logging
from torch import nn
from typing import Optional, List, Union
from transformers import AutoModel, AutoConfig, AutoTokenizer

from asciml_response_pytorch_service.utility import util


from asciml_inferentia_commons.frameworks.torch_handler import TorchNeuronHandler
from asciml_inferentia_commons.config import NeuronConfiguration, NeuronModel

model_config = util.get_config()
logger = logging.getLogger(__name__)


class PolicyViolationModel(nn.Module):
    """
    Model to classify if a pair of (utterance, response) is PV
    """

    def __init__(self):
        super(PolicyViolationModel, self).__init__()

        # create the base BERT model
        hf_config = AutoConfig.from_pretrained(os.path.join(model_config.MODEL_PREFIX, model_config.MODEL_CONFIG_FILE))
        base_model = AutoModel.from_config(hf_config)
        if model_config.DELETE_LAYERS:
            delete_transformer_layers(base_model, model_config.DELETE_LAYERS)
        self.base_model = base_model

        # create the classification layer acting on the CLS's output
        classifier = create_mlp(
            input_size=model_config.INPUT_SIZE,
            hidden_dims=model_config.HIDDEN_DIMS,
            num_classes=model_config.NUM_CLASSES,
            dropout=model_config.DROPOUT,
            activation_fn=model_config.ACTIVATION_FN
        )
        self.classification = classifier
    
    def mean_pooling(self,model_output, attention_mask):
        token_embeddings = model_output[0] #First element of model_output contains all token embeddings
        input_mask_expanded = attention_mask.unsqueeze(-1).expand(token_embeddings.size()).float()
        return torch.sum(token_embeddings * input_mask_expanded, 1) / torch.clamp(input_mask_expanded.sum(1), min=1e-9)

    def forward(self, input_ids: torch.Tensor, attention_mask: torch.Tensor):
        model_output = self.base_model(
            input_ids=input_ids,
            attention_mask=attention_mask
        )
        # calculating the mean of the embeddings
        mean_output=self.mean_pooling(model_output,attention_mask)
        logits=self.classification(mean_output)
        return logits


def get_example_input(tokenizer):
    """
    Method to return an example input that can be fed into the model.
    Needed to compile a model to work with Inferentia hardware,

    :param tokenizer: The tokenizer used to convert the sample input into tokens
    :return input_ids: (torch.LongTensor) IDs for input tokens.
    :return attention_mask: (torch.LongTensor) Attention mask used to compute self-attention.
    """
    tokens_inference = tokenizer.batch_encode_plus(
        [("this is a sample utterance", "this is a sample response")],
        max_length=model_config.MAX_SEQUENCE_LENGTH,
        pad_to_max_length=model_config.PAD_TO_MAX_LENGTH,
        truncation=model_config.TRUNCATION,
        return_tensors="pt"
    )

    input_ids = tokens_inference['input_ids']
    attention_mask = tokens_inference['attention_mask']

    return input_ids, attention_mask


def get_model_and_tokenizer():
    is_inf = os.environ.get('NEURON_CORE_HOST_TOTAL', False)

    # logger.info("Loading the model, tokenizer for ASCIMLRomancePVMultilingualV1 endpoint")

    # create the PV model
    model = PolicyViolationModel()

    # load the saved model weights
    saved_weights_file = os.path.join(model_config.MODEL_PREFIX, model_config.MODEL_WEIGHTS_FILE)
    model.load_state_dict(torch.load(saved_weights_file, map_location=torch.device("cpu")))
    # changing to eval mode
#{fact rule=pytorch-disable-gradient-calculation@v1.0 defects=1}
    model = model.eval()
#{/fact}
    # load the tokenizer
    tokenizer = AutoTokenizer.from_pretrained(model_config.MODEL_PREFIX)

    if not is_inf:
        return model, tokenizer

    example_input = get_example_input(tokenizer)
    # TorchNeuronHandler works with multi-model endpoints by design, this endpoint only uses a single model.
    neuron_model_config = {
        'LatencyTestDummy': NeuronModel(model, example_input, model_config.NEURON_CONFIG)
    }
    torch_handler = TorchNeuronHandler(neuron_model_config)
    torch_handler.compile()

    return torch_handler.models['LatencyTestDummy'].model, tokenizer


ACT_FN = {
    "relu": nn.ReLU,
    "tanh": nn.Tanh,
}


def create_mlp(
    input_size: int,
    hidden_dims: Optional[Union[int, List[int]]],
    num_classes: int = 2,
    dropout: float = 0.1,
    activation_fn: str = 'relu'
):
    """
    Creates a Multi-Layer Perceptron

    :param input_size: dimension of the input tensor
    :param hidden_dims: dimension(s) of the hidden layer(s)
        if hidden_dim = None: input --> Dropout -> Linear (out_size=num_class)
        if hidden_dim = K: input -> Dropout --> Linear(out_size=K) -> ReLU -> Dropout --> Linear(out_size=num_class)
        if hidden_dim = [K1,..,Kn]: input -> Dropout -->
                Linear(out_size=K1) -> ReLU -> Dropout --> .... -->
                Linear(out_size=Kn) -> ReLU -> Dropout --> Linear(out_size=num_class)
    :param num_classes: number of output classes
    :param dropout: dropout rate
    :param activation_fn: name of activation function to be used in the hidden layers
    """
    act_fn = ACT_FN[activation_fn]

    layers = [nn.Dropout(dropout)]  # remove this dropout b/c BERT has dropout in output
    hd_prev = input_size

    if isinstance(hidden_dims, int):
        hidden_dims = [hidden_dims]

    if hidden_dims is not None:
        for hd in hidden_dims:
            layers.extend([nn.Linear(hd_prev, hd), act_fn(), nn.Dropout(dropout)])
            hd_prev = hd
    layers.append(nn.Linear(hd_prev, num_classes))

    return nn.Sequential(*layers)


def delete_transformer_layers(model: nn.Module, layer_indices: List[int]):
    """
    Delete layers from transformer model
    """
    all_layers = get_transformer_layers(model)

    for index in sorted(layer_indices, reverse=True):
        del all_layers[index]

    return


def get_transformer_layers(model: nn.Module):
    """
    Returns layers from transformer (encoder) model
    """
    if hasattr(model, "encoder"):
        layers = model.encoder.layer
    elif hasattr(model, "transformer"):
        layers = model.transformer.layer
    else:
        raise ValueError(f"invalid base model")

    return layers
