def __CELL_EDGE__(x):
	pass
__CELL_EDGE__(0)
#@title Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
__CELL_EDGE__(1)
pass #pip install  tf-models-nightly
__CELL_EDGE__(2)
import os

import numpy as np
import matplotlib.pyplot as plt

#{fact rule=tensorflow-control-sources-of-randomness@v1.0 defects=1}
import tensorflow as tf
#{/fact}

from official import nlp
from official.nlp.modeling.ops import sampling_module
from official.nlp.modeling.ops import beam_search
__CELL_EDGE__(3)
params = {}
params['num_heads'] = 2
params['num_layers'] = 2
params['batch_size'] = 2
params['n_dims'] = 256
params['max_decode_length'] = 4
__CELL_EDGE__(4)
cache = {
    'layer_%d' % layer: {
        'k': tf.zeros([params['batch_size'], params['max_decode_length'], params['num_heads'], params['n_dims']/params['num_heads']], dtype=tf.float32),
        'v': tf.zeros([params['batch_size'], params['max_decode_length'], params['num_heads'], params['n_dims']/params['num_heads']], dtype=tf.float32)
        } for layer in range(params['num_layers'])
    }
print("cache key shape for layer 1 :", cache['layer_1']['k'].shape)
__CELL_EDGE__(5)
def length_norm(length, dtype):
  """Return length normalization factor."""
  return tf.pow(((5. + tf.cast(length, dtype)) / 6.), 0.0)
__CELL_EDGE__(6)
probabilities = tf.constant([[[0.3, 0.4, 0.3], [0.3, 0.3, 0.4],
                              [0.1, 0.1, 0.8], [0.1, 0.1, 0.8]],
                            [[0.2, 0.5, 0.3], [0.2, 0.7, 0.1],
                              [0.1, 0.1, 0.8], [0.1, 0.1, 0.8]]])
def model_fn(i):
  return probabilities[:, i, :]
__CELL_EDGE__(7)
def _symbols_to_logits_fn():
  """Calculates logits of the next tokens."""
  def symbols_to_logits_fn(ids, i, temp_cache):
    del ids
    logits = tf.cast(tf.math.log(model_fn(i)), tf.float32)
    return logits, temp_cache
  return symbols_to_logits_fn
__CELL_EDGE__(8)
greedy_obj = sampling_module.SamplingModule(
    length_normalization_fn=None,
    dtype=tf.float32,
    symbols_to_logits_fn=_symbols_to_logits_fn(),
    vocab_size=3,
    max_decode_length=params['max_decode_length'],
    eos_id=10,
    padded_decode=False)
ids, _ = greedy_obj.generate(
    initial_ids=tf.constant([9, 1]), initial_cache=cache)
print("Greedy Decoded Ids:", ids)
__CELL_EDGE__(9)
top_k_obj = sampling_module.SamplingModule(
    length_normalization_fn=length_norm,
    dtype=tf.float32,
    symbols_to_logits_fn=_symbols_to_logits_fn(),
    vocab_size=3,
    max_decode_length=params['max_decode_length'],
    eos_id=10,
    sample_temperature=tf.constant(1.0),
    top_k=tf.constant(3),
    padded_decode=False,
    enable_greedy=False)
ids, _ = top_k_obj.generate(
    initial_ids=tf.constant([9, 1]), initial_cache=cache)
print("top-k sampled Ids:", ids)
__CELL_EDGE__(10)
top_p_obj = sampling_module.SamplingModule(
    length_normalization_fn=length_norm,
    dtype=tf.float32,
    symbols_to_logits_fn=_symbols_to_logits_fn(),
    vocab_size=3,
    max_decode_length=params['max_decode_length'],
    eos_id=10,
    sample_temperature=tf.constant(1.0),
    top_p=tf.constant(0.9),
    padded_decode=False,
    enable_greedy=False)
ids, _ = top_p_obj.generate(
    initial_ids=tf.constant([9, 1]), initial_cache=cache)
print("top-p sampled Ids:", ids)
__CELL_EDGE__(11)
beam_size = 2
params['batch_size'] = 1
beam_cache = {
    'layer_%d' % layer: {
        'k': tf.zeros([params['batch_size'], params['max_decode_length'], params['num_heads'], params['n_dims']], dtype=tf.float32),
        'v': tf.zeros([params['batch_size'], params['max_decode_length'], params['num_heads'], params['n_dims']], dtype=tf.float32)
        } for layer in range(params['num_layers'])
    }
print("cache key shape for layer 1 :", beam_cache['layer_1']['k'].shape)
ids, _ = beam_search.sequence_beam_search(
    symbols_to_logits_fn=_symbols_to_logits_fn(),
    initial_ids=tf.constant([9], tf.int32),
    initial_cache=beam_cache,
    vocab_size=3,
    beam_size=beam_size,
    alpha=0.6,
    max_decode_length=params['max_decode_length'],
    eos_id=10,
    padded_decode=False,
    dtype=tf.float32)
print("Beam search ids:", ids)
