def __CELL_EDGE__(x):
	pass
__CELL_EDGE__(0)
# assumes data exists in one or more folder. 
# If single folder contains one attribute data, it runs one attribute model
# If single folder contains multi-attribute data, it runs multi-attribute model

# If multiple folders contain multiple attribute data, it runs multiple attribute model
__CELL_EDGE__(1)
# from /work/BERT/models/transformers/examples/ner/run_tf_ner.py
# code bug fix made as: https://github.com/huggingface/transformers/issues/3686
# eval/prod code fix
__CELL_EDGE__(2)
import sys
# insert at 1, 0 is the script path (or '' in REPL)
sys.path.insert(1, '/home/ubuntu/work/BERT/models/transformers/examples/ner/')
#sys.path.remove('home/ubuntu/work/BERT/models/transformers/examples/ner/')
sys.path
#!pip install fastprogress
__CELL_EDGE__(3)
# coding=utf-8
import collections
import datetime
import glob
import math
import os
import re

import ast
import pandas as pd
import boto3
import json
#from collections import Counter
import gc
#import numpy as np


import numpy as np
import tensorflow as tf
from absl import app, flags, logging
from seqeval import metrics

from transformers import (
    TF2_WEIGHTS_NAME,
    TF_MODEL_FOR_TOKEN_CLASSIFICATION_MAPPING,
    AutoConfig,
    AutoTokenizer,
    GradientAccumulator,
    TFAutoModelForTokenClassification,
    create_optimizer,
)
from utils_ner import convert_examples_to_features, get_labels, get_labels_amazon
from utils_ner import get_labels_amazon_from_paths, read_examples_from_file, read_examples_from_file_amazon
from utils_ner import read_asin_examples_from_file_amazon

try:
    from fastprogress import master_bar, progress_bar
except ImportError:
    from fastprogress.fastprogress import master_bar, progress_bar


MODEL_CONFIG_CLASSES = list(TF_MODEL_FOR_TOKEN_CLASSIFICATION_MAPPING.keys())
MODEL_TYPES = tuple(conf.model_type for conf in MODEL_CONFIG_CLASSES)

ALL_MODELS = sum((tuple(conf.pretrained_config_archive_map.keys()) for conf in MODEL_CONFIG_CLASSES), (),)
__CELL_EDGE__(4)
from absl import app,flags
#flags = tf.flags

FLAGS = flags.FLAGS

flags.DEFINE_string('f', '', 'kernel')

flags.DEFINE_string(
    "data_dir", None, "The input data dir. Should contain the .conll files (or other data files) " "for the task."
)

flags.DEFINE_string("model_type", None, "Model type selected in the list: " + ", ".join(MODEL_TYPES))

flags.DEFINE_string(
    "model_name_or_path",
    None,
    "Path to pre-trained model or shortcut name selected in the list: " + ", ".join(ALL_MODELS),
)

flags.DEFINE_string("output_dir", None, "The output directory where the model checkpoints will be written.")

flags.DEFINE_string(
    "label_path", "", "Path to a file containing all labels. If not specified, CoNLL-2003 labels are used."
)

flags.DEFINE_string("config_name", "", "Pretrained config name or path if not the same as model_name")

flags.DEFINE_string("tokenizer_name", "", "Pretrained tokenizer name or path if not the same as model_name")

flags.DEFINE_string("cache_dir", "", "Where do you want to store the pre-trained models downloaded from s3")

flags.DEFINE_integer(
    "max_seq_length",
    128,
    "The maximum total input sentence length after tokenization. "
    "Sequences longer than this will be truncated, sequences shorter "
    "will be padded.",
)

flags.DEFINE_string(
    "tpu",
    None,
    "The Cloud TPU to use for training. This should be either the name "
    "used when creating the Cloud TPU, or a grpc://ip.address.of.tpu:8470 "
    "url.",
)

flags.DEFINE_integer("num_tpu_cores", 8, "Total number of TPU cores to use.")

flags.DEFINE_boolean("do_train", False, "Whether to run training.")

flags.DEFINE_boolean("do_eval", False, "Whether to run eval on the dev set.")

flags.DEFINE_boolean("do_predict", False, "Whether to run predictions on the test set.")

flags.DEFINE_boolean(
    "evaluate_during_training", False, "Whether to run evaluation during training at each logging step."
)

flags.DEFINE_boolean("do_lower_case", False, "Set this flag if you are using an uncased model.")

flags.DEFINE_integer("per_device_train_batch_size", 8, "Batch size per GPU/CPU/TPU for training.")

flags.DEFINE_integer("per_device_eval_batch_size", 8, "Batch size per GPU/CPU/TPU for evaluation.")

flags.DEFINE_integer(
    "gradient_accumulation_steps", 1, "Number of updates steps to accumulate before performing a backward/update pass."
)

flags.DEFINE_float("learning_rate", 5e-5, "The initial learning rate for Adam.")

flags.DEFINE_float("weight_decay", 0.0, "Weight decay if we apply some.")

flags.DEFINE_float("adam_epsilon", 1e-8, "Epsilon for Adam optimizer.")

flags.DEFINE_float("max_grad_norm", 1.0, "Max gradient norm.")

flags.DEFINE_integer("num_train_epochs", 3, "Total number of training epochs to perform.")

flags.DEFINE_integer(
    "max_steps", -1, "If > 0: set total number of training steps to perform. Override num_train_epochs."
)

flags.DEFINE_integer("warmup_steps", 0, "Linear warmup over warmup_steps.")

flags.DEFINE_integer("logging_steps", 50, "Log every X updates steps.")

flags.DEFINE_integer("save_steps", 50, "Save checkpoint every X updates steps.")

flags.DEFINE_boolean(
    "eval_all_checkpoints",
    False,
    "Evaluate all checkpoints starting with the same prefix as model_name ending and ending with step number",
)

flags.DEFINE_boolean("no_cuda", False, "Avoid using CUDA when available")

flags.DEFINE_boolean("overwrite_output_dir", False, "Overwrite the content of the output directory")

flags.DEFINE_boolean("overwrite_cache", False, "Overwrite the cached training and evaluation sets")

flags.DEFINE_integer("seed", 42, "random seed for initialization")

flags.DEFINE_boolean("fp16", False, "Whether to use 16-bit (mixed) precision instead of 32-bit")

flags.DEFINE_string(
    "gpus",
    "0",
    "Comma separated list of gpus devices. If only one, switch to single "
    "gpu strategy, if None takes all the gpus available.",
)

flags.DEFINE_string("bucket_name", "", "S3 bucket name")
flags.DEFINE_string("bucket_path", "", "S3 bucket path")
flags.DEFINE_string("bucket_folder", "", "S3 bucket folder") #bucket_name + "/" + bucket_path + "/" + bucket_folder
flags.DEFINE_string("cache_datadir", "", "local directory to keep data files cache")
__CELL_EDGE__(5)
def train(
    args, strategy, train_dataset, tokenizer, model, num_train_examples, labels, train_batch_size, pad_token_label_id
):
    if args["max_steps"] > 0:
        num_train_steps = args["max_steps"] * args["gradient_accumulation_steps"]
        args["num_train_epochs"] = 1
    else:
        num_train_steps = (
            math.ceil(num_train_examples / train_batch_size)
            // args["gradient_accumulation_steps"]
            * args["num_train_epochs"]
        )

    writer = tf.summary.create_file_writer("/tmp/mylogs")

    with strategy.scope():
        loss_fct = tf.keras.losses.SparseCategoricalCrossentropy(
            from_logits=True, reduction=tf.keras.losses.Reduction.NONE
        )
        optimizer = create_optimizer(args["learning_rate"], num_train_steps, args["warmup_steps"])

        if args["fp16"]:
            optimizer = tf.keras.mixed_precision.experimental.LossScaleOptimizer(optimizer, "dynamic")

        loss_metric = tf.keras.metrics.Mean(name="loss", dtype=tf.float32)
        gradient_accumulator = GradientAccumulator()

    logging.info("***** Running training *****")
    logging.info("  Num examples = %d", num_train_examples)
    logging.info("  Num Epochs = %d", args["num_train_epochs"])
    logging.info("  Instantaneous batch size per device = %d", args["per_device_train_batch_size"])
    logging.info(
        "  Total train batch size (w. parallel, distributed & accumulation) = %d",
        train_batch_size * args["gradient_accumulation_steps"],
    )
    logging.info("  Gradient Accumulation steps = %d", args["gradient_accumulation_steps"])
    logging.info("  Total training steps = %d", num_train_steps)

    model.summary()

    @tf.function
    def apply_gradients():
        grads_and_vars = []

        for gradient, variable in zip(gradient_accumulator.gradients, model.trainable_variables):
            if gradient is not None:
                scaled_gradient = gradient / (args["n_device"] * args["gradient_accumulation_steps"])
                grads_and_vars.append((scaled_gradient, variable))
            else:
                grads_and_vars.append((gradient, variable))

        optimizer.apply_gradients(grads_and_vars, args["max_grad_norm"])
        gradient_accumulator.reset()

    @tf.function
    def train_step(train_features, train_labels):
        def step_fn(train_features, train_labels):
            inputs = {"attention_mask": train_features["input_mask"], "training": True}

            if args["model_type"] != "distilbert":
                inputs["token_type_ids"] = (
                    train_features["segment_ids"] if args["model_type"] in ["bert", "xlnet"] else None
                )

            with tf.GradientTape() as tape:
                logits = model(train_features["input_ids"], **inputs)[0]
                active_loss = tf.reshape(train_labels, (-1,)) != pad_token_label_id
                active_logits = tf.boolean_mask(tf.reshape(logits, (-1, len(labels))), active_loss)
                active_labels = tf.boolean_mask(tf.reshape(train_labels, (-1,)), active_loss)
                cross_entropy = loss_fct(active_labels, active_logits)
                loss = tf.reduce_sum(cross_entropy) * (1.0 / train_batch_size)
                grads = tape.gradient(loss, model.trainable_variables)

                gradient_accumulator(grads)

            return cross_entropy

        per_example_losses = strategy.experimental_run_v2(step_fn, args=(train_features, train_labels))
        mean_loss = strategy.reduce(tf.distribute.ReduceOp.MEAN, per_example_losses, axis=0)

        return mean_loss

    current_time = datetime.datetime.now()
    train_iterator = master_bar(range(args["num_train_epochs"]))
    global_step = 0
    logging_loss = 0.0

    for epoch in train_iterator:
        epoch_iterator = progress_bar(
            train_dataset, total=num_train_steps, parent=train_iterator, display=args["n_device"] > 1
        )
        step = 1

        with strategy.scope():
            logging.info(epoch_iterator)
            for train_features, train_labels in epoch_iterator:
                loss = train_step(train_features, train_labels)

                if step % args["gradient_accumulation_steps"] == 0:
                    strategy.experimental_run_v2(apply_gradients)

                    loss_metric(loss)

                    global_step += 1

                    if args["logging_steps"] > 0 and global_step % args["logging_steps"] == 0:
                        # Log metrics
                        if (
                            args["n_device"] == 1 and args["evaluate_during_training"]
                        ):  # Only evaluate when single GPU otherwise metrics may not average well
                            y_true, y_pred, eval_loss = evaluate(
                                args, strategy, model, tokenizer, labels, pad_token_label_id, mode="dev"
                            )
                            report = metrics.classification_report(y_true, y_pred, digits=4)

                            logging.info("Eval at step " + str(global_step) + "\n" + report)
                            logging.info("eval_loss: " + str(eval_loss))

                            precision = metrics.precision_score(y_true, y_pred)
                            recall = metrics.recall_score(y_true, y_pred)
                            f1 = metrics.f1_score(y_true, y_pred)

                            with writer.as_default():
                                tf.summary.scalar("eval_loss", eval_loss, global_step)
                                tf.summary.scalar("precision", precision, global_step)
                                tf.summary.scalar("recall", recall, global_step)
                                tf.summary.scalar("f1", f1, global_step)

                        lr = optimizer.learning_rate
                        learning_rate = lr(step)

                        with writer.as_default():
                            tf.summary.scalar("lr", learning_rate, global_step)
                            tf.summary.scalar(
                                "loss", (loss_metric.result() - logging_loss) / args["logging_steps"], global_step
                            )

                        logging_loss = loss_metric.result()

                    with writer.as_default():
                        tf.summary.scalar("loss", loss_metric.result(), step=step)

                    if args["save_steps"] > 0 and global_step % args["save_steps"] == 0:
                        # Save model checkpoint
                        output_dir = os.path.join(args["output_dir"], "checkpoint-{}".format(global_step))

                        if not os.path.exists(output_dir):
                            os.makedirs(output_dir)

                        model.save_pretrained(output_dir)
                        logging.info("Saving model checkpoint to %s", output_dir)

                train_iterator.child.comment = f"loss : {loss_metric.result()}"
                step += 1

        train_iterator.write(f"loss epoch {epoch + 1}: {loss_metric.result()}")
        
        loss_metric.reset_states()

    logging.info("  Training took time = {}".format(datetime.datetime.now() - current_time))
    del train_iterator

def evaluate(args, strategy, model, tokenizer, labels, pad_token_label_id, LANGUAGE, mode):
    eval_batch_size = args["per_device_eval_batch_size"] * args["n_device"]
    eval_dataset, size = load_and_cache_examples(
        args, tokenizer, labels, pad_token_label_id, eval_batch_size, LANGUAGE, mode
    )
    eval_dataset = setup_dataset(args,eval_dataset,eval_batch_size,mode)
    eval_dataset = strategy.experimental_distribute_dataset(eval_dataset)
    preds = None
    num_eval_steps = math.ceil(size / eval_batch_size)
    eval_iterator = progress_bar(eval_dataset, total=num_eval_steps,display=args["n_device"] > 1)
#{fact rule=tensorflow-redundant-softmax@v1.0 defects=1}
    loss_fct = tf.keras.losses.SparseCategoricalCrossentropy(reduction=tf.keras.losses.Reduction.NONE)
#{/fact}
    loss = 0.0

    logging.info("***** Running evaluation *****")
    logging.info("  Num examples = %d", size)
    logging.info("  Batch size = %d", eval_batch_size)
                           
    for eval_features, eval_labels in eval_iterator:
        inputs = {"attention_mask": eval_features["input_mask"], "training": False}
        if args["model_type"] != "distilbert":
            inputs["token_type_ids"] = (
                eval_features["segment_ids"] if args["model_type"] in ["bert", "xlnet"] else None
            )

        with strategy.scope():
            logits = model(eval_features["input_ids"], **inputs)[0]
            active_loss = tf.reshape(eval_labels, (-1,)) != pad_token_label_id
            active_logits = tf.boolean_mask(tf.reshape(logits, (-1, len(labels))), active_loss)
            active_labels = tf.boolean_mask(tf.reshape(eval_labels, (-1,)), active_loss)
            cross_entropy = loss_fct(active_labels, active_logits)
            loss += tf.reduce_sum(cross_entropy) * (1.0 / eval_batch_size)

        if preds is None:
            preds = logits.numpy()
            label_ids = eval_labels.numpy()
        else:
            preds = np.append(preds, logits.numpy(), axis=0)
            label_ids = np.append(label_ids, eval_labels.numpy(), axis=0)

    preds = np.argmax(preds, axis=2)
    y_pred = [[] for _ in range(label_ids.shape[0])]
    y_true = [[] for _ in range(label_ids.shape[0])]
    loss = loss / num_eval_steps

    for i in range(label_ids.shape[0]):
        for j in range(label_ids.shape[1]):
            if label_ids[i, j] != pad_token_label_id:
                y_pred[i].append(labels[preds[i, j]]) # - 1
                y_true[i].append(labels[label_ids[i, j]]) # - 1
                
    return y_true, y_pred, loss.numpy()


def load_cache(cached_file, max_seq_length):
    name_to_features = {
        "input_ids": tf.io.FixedLenFeature([max_seq_length], tf.int64),
        "input_mask": tf.io.FixedLenFeature([max_seq_length], tf.int64),
        "segment_ids": tf.io.FixedLenFeature([max_seq_length], tf.int64),
        "label_ids": tf.io.FixedLenFeature([max_seq_length], tf.int64),
    }

    def _decode_record(record):
        example = tf.io.parse_single_example(record, name_to_features)
        features = {}
        features["input_ids"] = example["input_ids"]
        features["input_mask"] = example["input_mask"]
        features["segment_ids"] = example["segment_ids"]

        return features, example["label_ids"]

    d = tf.data.TFRecordDataset(cached_file)
    d = d.map(_decode_record, num_parallel_calls=4)
    count = d.reduce(0, lambda x, _: x + 1)

    return d, count.numpy()


def save_cache(features, cached_features_file):
    writer = tf.io.TFRecordWriter(cached_features_file)

    for (ex_index, feature) in enumerate(features):
        if ex_index % 5000 == 0:
            logging.info("Writing example %d of %d" % (ex_index, len(features)))

        def create_int_feature(values):
            f = tf.train.Feature(int64_list=tf.train.Int64List(value=list(values)))
            return f

        record_feature = collections.OrderedDict()
        record_feature["input_ids"] = create_int_feature(feature.input_ids)
        record_feature["input_mask"] = create_int_feature(feature.input_mask)
        record_feature["segment_ids"] = create_int_feature(feature.segment_ids)
        record_feature["label_ids"] = create_int_feature(feature.label_ids)

        tf_example = tf.train.Example(features=tf.train.Features(feature=record_feature))

        writer.write(tf_example.SerializeToString())

    writer.close()

def data_exists_in_file(bucket_name,data_dir):
    s3 = boto3.resource('s3')
    objs = s3.Bucket(bucket_name).objects.filter(Prefix=data_dir + "/sentences/")  
    for obj in objs:
        file_path = obj.key
        f = s3.Object(bucket_name, file_path).get()['Body'].read().splitlines()        
        if len(f) > 1:
            return True
        else:
            return False
        
def data_exists(args, LANGUAGE):
    for bp in args["bucket_path"]:
        data_dir = bp + LANGUAGE + "/" + args["bucket_folder"]
        if data_exists_in_file(args["bucket_name"],data_dir):
            return True
    return False

def load_and_cache_examples(args, tokenizer, labels, pad_token_label_id, batch_size, LANGUAGE, mode):
    drop_remainder = True if args["tpu"] or mode == "train" else False

    # Load data features from cache or dataset file
    cached_features_file = os.path.join(
        args["cache_datadir"],
        "cached_{}_{}_{}_{}.tf_record".format(
            mode, list(filter(None, args["model_name_or_path"].split("/"))).pop(), str(args["max_seq_length"]), LANGUAGE,
        ),
    )
    if os.path.exists(cached_features_file) and not args["overwrite_cache"] and mode is not "asins":
        logging.info("Loading features from cached file %s", cached_features_file)
        dataset, size = load_cache(cached_features_file, args["max_seq_length"])
    else:
        i = 0
        all_examples = []
        if mode == "asins":
            logging.info("Creating features from dataset file at %s", "./data/sents2.json")
            all_examples, asins, full_data = read_asin_examples_from_file_amazon("./data/sents2.json", mode)
            print("# of all asin examples",len(all_examples))
        else:
            for bp in args["bucket_path"]:
                data_dir = bp + LANGUAGE + "/" + args["bucket_folder"]
                logging.info("Creating features from dataset file at %s", data_dir)
                if mode == "asins":
                    examples = read_asin_examples_from_file_amazon("./data/sents2.json", mode)
                else:
                    examples = read_examples_from_file_amazon(args["bucket_name"],data_dir, mode)

                print("# of examples",len(examples))
                all_examples.extend(examples)
                print("# of all_examples",len(all_examples))
                i+=1
        features = convert_examples_to_features(
            all_examples,
            labels,
            args["max_seq_length"],
            tokenizer,
            cls_token_at_end=bool(args["model_type"] in ["xlnet"]),
            # xlnet has a cls token at the end
            cls_token=tokenizer.cls_token,
            cls_token_segment_id=2 if args["model_type"] in ["xlnet"] else 0,
            sep_token=tokenizer.sep_token,
            sep_token_extra=bool(args["model_type"] in ["roberta"]),
            # roberta uses an extra separator b/w pairs of sentences, cf. github.com/pytorch/fairseq/commit/1684e166e3da03f5b600dbb7855cb98ddfcd0805
            pad_on_left=bool(args["model_type"] in ["xlnet"]),
            # pad on the left for xlnet
            pad_token=tokenizer.pad_token_id,
            pad_token_segment_id=tokenizer.pad_token_type_id,
            pad_token_label_id=pad_token_label_id,
        )
        logging.info("Saving features into cached file %s", cached_features_file)

        save_cache(features, cached_features_file)
        dataset, size = load_cache(cached_features_file, args["max_seq_length"])
        
    if mode is "asins":
        return dataset, size, asins, full_data
    else:
        return dataset, size

def setup_dataset(args,dataset,batch_size,mode):
    drop_remainder = True if args["tpu"] or mode == "train" else False
    
    if mode == "train":
        dataset = dataset.shuffle(buffer_size=8192, seed=args["seed"])
        dataset = dataset.repeat()

    dataset = dataset.batch(batch_size, drop_remainder)
    dataset = dataset.prefetch(buffer_size=
                               batch_size)
    
    return dataset
__CELL_EDGE__(6)
#data_folder = ['AttributesAND2-10000']
#data_folder = ["fit_type","pocket_description","occasion_type","finish_type","form_factor","model_name","target_audience","material","pattern","scent"]
data_folder = [
    #"target_audience"
    #,"collar_style"
    #,"fabric_type"
    #,"fit_type"
    #,"pattern"
    #,"size"
    "material"
    ]
    
samples = 10000
data_folder = [d + "-" + str(samples) for d in data_folder]
ptval = ""
if ptval != "":
    stfolder = "ST1_" + ptval + "_" + str(len(data_folder)) + "/"
else:
    if len(data_folder) > 1:
        stfolder = "ST1_" + str(len(data_folder)) + "/"
    else:
        stfolder = ""
#data_folder = ['target_audience-10000','material-10000']
#'target_audience-10000'
#'material-10000'
#'AttributesAND2-10000'
#'AttributesOR2-10000'

#file structure: bucket_name + bucket_path + bucket_folder

bucket_name = 'catalog-search-output-suleimkh'
bucket_path = 'training-data-as/'+stfolder
bucket_folder = 'title-prefix-5'

if len(data_folder) == 1:
    OUT_DIR_ORIG = "/home/ubuntu/work/BERT/output/"
else:
    OUT_DIR_ORIG = "/home/ubuntu/work/BERT/output/"+"MultiAttribute_"+str(len(data_folder))+"/"

FLAGS.data_dir =  "" #used for local directory
FLAGS.bucket_name = bucket_name
FLAGS.bucket_folder =  bucket_folder
FLAGS.model_name_or_path = "bert-base-multilingual-uncased" #"bert-base-uncased"#"bert-base-multilingual-uncased"
FLAGS.do_lower_case = True
FLAGS.model_type = "bert"
FLAGS.max_seq_length = 128
#FLAGS.learning_rate=2e-5
FLAGS.num_train_epochs= 1
FLAGS.per_device_train_batch_size=32 
FLAGS.per_device_eval_batch_size=32 
FLAGS.save_steps = 50000
FLAGS.seed = 1
FLAGS.do_train = False
FLAGS.do_eval = False
FLAGS.do_predict = False
FLAGS.overwrite_output_dir = False
FLAGS.overwrite_cache = False

FLAGS.fp16 = True
__CELL_EDGE__(7)
LANGS = ["ONE"]#["ONE","ALL"]

#TRAIN_LANGUAGES_SET = ["de_DE","es_ES","es_MX","fr_FR","it_IT","nl_NL","pt_BR","ja_JP","tr_TR","ar_AE","en_AE","en_AU","en_CA","en_GB","en_IN","en_SG","en_US"]
TRAIN_LANGUAGES_SET = ["en_US"]#["de_DE","es_ES","es_MX","fr_FR","it_IT","nl_NL","pt_BR","ja_JP","tr_TR","ar_AE","en_US"]
TEST_LANGUAGES_SET = TRAIN_LANGUAGES_SET
#TEST_LANGUAGES = TEST_LANGUAGES_SET
TRAIN_LANGUAGES = []

allrundone = False
for LANG in LANGS:
    for df in data_folder:
        #label_path = []
        #for Train_Lang in TRAIN_LANGUAGES_SET:
        #    label_path.append(bucket_path+df+'/' + Train_Lang + "/" + bucket_folder + "/tags")    
        #FLAGS.label_path = label_path
        for il in range(len(TRAIN_LANGUAGES_SET)):
            if LANG == "ONE":
                TRAIN_LANGUAGES = [TRAIN_LANGUAGES_SET[il]]
                TEST_LANGUAGES = TRAIN_LANGUAGES
                bp = bucket_path+df+'/'
                FLAGS.bucket_path =  [bp]
                OUT_DIR = OUT_DIR_ORIG + df + "/"
                
                #label_path = []
                #label_path.append(bucket_path+df+'/' + TRAIN_LANGUAGES[0] + "/" + bucket_folder + "/tags")
                #FLAGS.label_path = label_path
                FLAGS.label_path = [bucket_path+df+'/' + TRAIN_LANGUAGES[0] + "/" + bucket_folder + "/tags"]
                
            if LANG == "ALL":
                if allrundone: 
                    break
                allrundone = True
                TRAIN_LANGUAGES = TRAIN_LANGUAGES_SET
                TEST_LANGUAGES = TEST_LANGUAGES_SET
                OUT_DIR = OUT_DIR_ORIG
                if len(data_folder) == 1:
                    OUT_DIR = OUT_DIR_ORIG + df + "/"
                    bp = bucket_path+df+'/'
                    FLAGS.bucket_path = [bp]
                    
                    label_path = []
                    for Train_Lang in TRAIN_LANGUAGES_SET:
                        label_path.append(bucket_path+df+'/' + Train_Lang + "/" + bucket_folder + "/tags")
                    FLAGS.label_path = label_path
                else:
                    OUT_DIR = OUT_DIR_ORIG
                    bp = []
                    for idf in data_folder:
                        bp.append(bucket_path+idf+'/')
                    FLAGS.bucket_path = bp
                    
                    label_path = []
                    for idf in data_folder:
                        for Train_Lang in TRAIN_LANGUAGES_SET:
                            label_path.append(bucket_path+idf+'/' + Train_Lang + "/" + bucket_folder + "/tags")
                    FLAGS.label_path = label_path
                    
            FLAGS.output_dir = OUT_DIR + "-".join(TRAIN_LANGUAGES) + "/"
            FLAGS.cache_datadir = OUT_DIR + "-".join(TRAIN_LANGUAGES) + "/"

            if not os.path.exists(OUT_DIR_ORIG):
                os.mkdir(OUT_DIR_ORIG)
            if not os.path.exists(OUT_DIR):
                os.mkdir(OUT_DIR)

            #logging.set_verbosity(logging.INFO) #todo open this comment
            args = flags.FLAGS.flag_values_dict()

            if (
                os.path.exists(args["output_dir"])
                and os.listdir(args["output_dir"])
                and args["do_train"]
                and not args["overwrite_output_dir"]
            ):
                raise ValueError(
                    "Output directory ({}) already exists and is not empty. Use --overwrite_output_dir to overcome.".format(
                        args["output_dir"]
                    )
                )

            if args["fp16"]:
                tf.config.optimizer.set_experimental_options({"auto_mixed_precision": True})

            if args["tpu"]:
                resolver = tf.distribute.cluster_resolver.TPUClusterResolver(tpu=args["tpu"])
                tf.config.experimental_connect_to_cluster(resolver)
                tf.tpu.experimental.initialize_tpu_system(resolver)
                strategy = tf.distribute.experimental.TPUStrategy(resolver)
                args["n_device"] = args["num_tpu_cores"]
            elif len(args["gpus"].split(",")) > 1:
                args["n_device"] = len([f"/gpu:{gpu}" for gpu in args["gpus"].split(",")])
                strategy = tf.distribute.MirroredStrategy(devices=[f"/gpu:{gpu}" for gpu in args["gpus"].split(",")])
            elif args["no_cuda"]:
                args["n_device"] = 1
                strategy = tf.distribute.OneDeviceStrategy(device="/cpu:0")
            else:
                args["n_device"] = len(args["gpus"].split(","))
                strategy = tf.distribute.OneDeviceStrategy(device="/gpu:" + args["gpus"].split(",")[0])

            logging.warning(
                "n_device: %s, distributed training: %s, 16-bits training: %s",
                args["n_device"],
                bool(args["n_device"] > 1),
                args["fp16"],
            )

            #labels = get_labels_amazon(args["bucket_name"],args["label_path"])
            labels = get_labels_amazon_from_paths(args["bucket_name"],args["label_path"])
            num_labels = len(labels)
            pad_token_label_id = -1
            config = AutoConfig.from_pretrained(
                args["config_name"] if args["config_name"] else args["model_name_or_path"],
                num_labels=num_labels,
                cache_dir=args["cache_dir"] if args["cache_dir"] else None,
            )

            logging.info("Training/evaluation parameters %s", args)

            # Training
            if args["do_train"]:

                tokenizer = AutoTokenizer.from_pretrained(
                    args["tokenizer_name"] if args["tokenizer_name"] else args["model_name_or_path"],
                    do_lower_case=args["do_lower_case"],
                    cache_dir=args["cache_dir"] if args["cache_dir"] else None,
                )

                with strategy.scope():
                    model = TFAutoModelForTokenClassification.from_pretrained(
                        args["model_name_or_path"],
                        from_pt=bool(".bin" in args["model_name_or_path"]),
                        config=config,
                        cache_dir=args["cache_dir"] if args["cache_dir"] else None,
                    )

                train_batch_size = args["per_device_train_batch_size"] * args["n_device"]

                if not os.path.exists(args["output_dir"]):
                    os.makedirs(args["output_dir"])

                i = 0
                for TRAIN_LANGUAGE in TRAIN_LANGUAGES:

                    tmp_dataset, tmp_num_train_examples = load_and_cache_examples(
                        args, tokenizer, labels, pad_token_label_id, train_batch_size, TRAIN_LANGUAGE, mode="train"
                    )
                    if i == 0:
                        train_dataset = tmp_dataset
                        num_train_examples = tmp_num_train_examples
                    else:
                        train_dataset = train_dataset.concatenate(tmp_dataset)
                        num_train_examples += tmp_num_train_examples
                    i+=1
                    print("Training samples : ",num_train_examples) #len(list(train_dataset.as_numpy_iterator())))

                train_dataset = setup_dataset(args,train_dataset,train_batch_size,mode="train")
                train_dataset = strategy.experimental_distribute_dataset(train_dataset)

                train(
                    args,
                    strategy,
                    train_dataset,
                    tokenizer,
                    model,
                    num_train_examples,
                    labels,
                    train_batch_size,
                    pad_token_label_id,
                )

                logging.info("Saving ",TRAIN_LANGUAGE," model to %s", args["output_dir"])

                model.save_pretrained(args["output_dir"])
                tokenizer.save_pretrained(args["output_dir"])

            # Evaluation
            if args["do_eval"]:
                tokenizer = AutoTokenizer.from_pretrained(args["output_dir"], do_lower_case=args["do_lower_case"])
                checkpoints = []
                results = []

                if args["eval_all_checkpoints"]:
                    checkpoints = list(
                        os.path.dirname(c)
                        for c in sorted(
                            glob.glob(args["output_dir"] + "/**/" + TF2_WEIGHTS_NAME, recursive=True),
                            key=lambda f: int("".join(filter(str.isdigit, f)) or -1),
                        )
                    )

                logging.info("Evaluate the following checkpoints: %s", checkpoints)

                if len(checkpoints) == 0:
                    checkpoints.append(args["output_dir"])

                for checkpoint in checkpoints:
                    global_step = checkpoint.split("-")[-1] if re.match(".*checkpoint-[0-9]", checkpoint) else "final"

                    with strategy.scope():
                        model = TFAutoModelForTokenClassification.from_pretrained(checkpoint)

                    for TEST_LANGUAGE in TEST_LANGUAGES:
                        print(TEST_LANGUAGE)
                        y_true, y_pred, eval_loss = evaluate(
                            args, strategy, model, tokenizer, labels, pad_token_label_id, TEST_LANGUAGE, mode="dev"
                        )
                        report = metrics.classification_report(y_true, y_pred, digits=4)

                        lab = TEST_LANGUAGE
                        if global_step:
                            lab += " " + global_step
                        results.append({lab + "_report": report, lab + "_loss": eval_loss})

                output_eval_file = os.path.join(args["output_dir"], "eval_results.txt")

                with tf.io.gfile.GFile(output_eval_file, "w") as writer:
                    for res in results:
                        for key, val in res.items():
                            if "loss" in key:
                                logging.info(key + " = " + str(val))
                                writer.write(key + " = " + str(val))
                                writer.write("\n")
                            else:
                                logging.info(key)
                                logging.info("\n" + str(val))
                                writer.write(key + "\n")
                                writer.write(str(val))
                                writer.write("\n")

            if args["do_predict"]:
                tokenizer = AutoTokenizer.from_pretrained(args["output_dir"], do_lower_case=args["do_lower_case"])
                model = TFAutoModelForTokenClassification.from_pretrained(args["output_dir"])
                eval_batch_size = args["per_device_eval_batch_size"] * args["n_device"]

                lang = "-".join(TRAIN_LANGUAGES)
                for TEST_LANGUAGE in TEST_LANGUAGES: 
                    if data_exists(args, TEST_LANGUAGE):
                        y_true, y_pred, pred_loss = evaluate(args, strategy, model, tokenizer, labels, pad_token_label_id, TEST_LANGUAGE, mode="test")
                        output_test_results_file = os.path.join(args["output_dir"], lang+"-test-"+TEST_LANGUAGE+"-results.txt")
                        output_test_predictions_file = os.path.join(args["output_dir"], lang+"-test-"+TEST_LANGUAGE+"-predictions.txt")

                        res = metrics.precision_recall_fscore_support(y_true, y_pred)

                        with tf.io.gfile.GFile(output_test_results_file, "w") as writer:
                            report = metrics.classification_report(y_true, y_pred, digits=4)

                            lab = TEST_LANGUAGE
                            logging.info("\n" + lab + "_report:\n" + report
                                        + "\n" + lab + "_pred_loss " + str(pred_loss))

                            writer.write(report)
                            writer.write("\n\nloss = " + str(pred_loss))

                    else:
                        res = pd.DataFrame([["NaN","NaN","NaN","NaN","NaN"]],columns=['entity','precision','recall','f1-score','support'])

                    output_readable = os.path.join(args["output_dir"], TEST_LANGUAGE+".txt")
                    res.to_csv(output_readable,sep=",")
__CELL_EDGE__(8)
def getSequences(labs,attribute = "material.value"):
    #attribute = "material.value"
    seq = []
    new_seq = None
    seqStart= False
    for i in range(len(labs)):
        if labs[i] == 'b-'+attribute:
            if new_seq is not None:
                seq.append(new_seq)
                seqStart = False
            new_seq = []
            new_seq.append(i)
            seqStart = True
        elif labs[i] == 'i-'+attribute:
            if seqStart:
                new_seq.append(i)
            else:
                new_seq = []
                new_seq.append(i)
                seqStart = True
        else:
            if new_seq is not None:
                seq.append(new_seq)
                new_seq = None
                seqStart = False
    return seq

def getValue(seq,values):
    val = []
    for l in seq:
        val.append(values[l])
    return ' '.join(val)

def getScore(seq,scores):
    scr = []
    for l in seq:
        scr.append(scores[l])
    return np.max(scr)
__CELL_EDGE__(9)
def predict_rb(args, strategy, model, tokenizer, labels, pad_token_label_id, LANGUAGE, rockerbox_file, mode):
    pred_batch_size = args["per_device_eval_batch_size"] * args["n_device"]

    pred_dataset, size, asins, full_data = load_and_cache_examples(
        args, tokenizer, labels, pad_token_label_id, pred_batch_size, LANGUAGE, mode
    )
    pred_dataset = setup_dataset(args,pred_dataset,pred_batch_size,mode)
    pred_dataset = strategy.experimental_distribute_dataset(pred_dataset)
    preds = None
    num_pred_steps = math.ceil(size / pred_batch_size)
    pred_iterator = progress_bar(pred_dataset, total=num_pred_steps,display=args["n_device"] > 1)
#{fact rule=tensorflow-redundant-softmax@v1.0 defects=1}
    loss_fct = tf.keras.losses.SparseCategoricalCrossentropy(reduction=tf.keras.losses.Reduction.NONE)
#{/fact}
    loss = 0.0

    logging.info("***** Running evaluation *****")
    logging.info("  Num examples = %d", size)
    logging.info("  Batch size = %d", pred_batch_size)

    for pred_features, pred_labels in pred_iterator:
        inputs = {"attention_mask": pred_features["input_mask"], "training": False}
        if args["model_type"] != "distilbert":
            inputs["token_type_ids"] = (
                pred_features["segment_ids"] if args["model_type"] in ["bert", "xlnet"] else None
            )

        with strategy.scope():
            logits = model(pred_features["input_ids"], **inputs)[0]
            active_loss = tf.reshape(pred_labels, (-1,)) != pad_token_label_id
            active_logits = tf.boolean_mask(tf.reshape(logits, (-1, len(labels))), active_loss)
            active_labels = tf.boolean_mask(tf.reshape(pred_labels, (-1,)), active_loss)
            cross_entropy = loss_fct(active_labels, active_logits)
            loss += tf.reduce_sum(cross_entropy) * (1.0 / pred_batch_size)

        if preds is None:
            preds = logits.numpy()
            label_ids = pred_labels.numpy()
        else:
            preds = np.append(preds, logits.numpy(), axis=0)
            label_ids = np.append(label_ids, pred_labels.numpy(), axis=0)

    scores = np.max(preds, axis=2)
    preds = np.argmax(preds, axis=2)
    y_pred = [[] for _ in range(label_ids.shape[0])]
    y_scores = [[] for _ in range(label_ids.shape[0])]
    #y_label_ids = [[] for _ in range(label_ids.shape[0])]
    loss = loss / num_pred_steps

    for i in range(label_ids.shape[0]):
        for j in range(label_ids.shape[1]):
            if label_ids[i, j] != pad_token_label_id:
                y_pred[i].append(labels[preds[i, j]]) # - 1
                y_scores[i].append(scores[i, j])
                #y_label_ids[i].append(label_ids[i, j])

    attribute = "material.value"
    lang_tag = 'material.language_tag'
    lang = 'en_US'
    predictions = []
    for i in range(len(y_pred)):
        labs = y_pred[i]
        if any([l != 'o' for l in labs]): #if there is a prediction
            seqList = getSequences(labs,attribute)
            for seq in seqList:
                val = getValue(seq,full_data[i])
                scr = getScore(seq,y_scores[i])
                #'predictionProbability': tf.nn.softmax([scr,scr]).numpy()[0],
                p = {'rawModelScore': scr, 'attributeValueMap': {attribute: val, lang_tag: lang}, 'asin':asins[i]}
                predictions.append(p)
                
    return y_pred, loss.numpy(), predictions
__CELL_EDGE__(10)
rockerbox_file = "./data/sents2.json"
tokenizer = AutoTokenizer.from_pretrained(args["output_dir"], do_lower_case=args["do_lower_case"])
model = TFAutoModelForTokenClassification.from_pretrained(args["output_dir"])

TEST_LANGUAGE = "en_US"
y_pred, pred_loss, predictions = predict_rb(args, strategy, model, tokenizer, labels, 
                                     pad_token_label_id, TEST_LANGUAGE, rockerbox_file, mode="asins")
__CELL_EDGE__(11)
predictions[0]
__CELL_EDGE__(12)
lang = "en_US"
output_test_predictions_file = os.path.join(args["output_dir"], lang+"-test-"+TEST_LANGUAGE+"-predictions.txt")

#with open(output_test_predictions_file, 'w') as writer:
#    json.dump(predictions, writer)
with tf.io.gfile.GFile(output_test_predictions_file, "w") as writer:
    writer.write(str(predictions))
#len(predictions)
__CELL_EDGE__(13)
output_test_predictions_file
__CELL_EDGE__(14)

