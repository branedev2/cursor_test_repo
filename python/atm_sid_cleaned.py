def __CELL_EDGE__(x):
	pass
__CELL_EDGE__(0)
# check ig PYTHONPATH contains: AlexaTeacherModelExperiments
get_ipython().system('echo $PYTHONPATH')
__CELL_EDGE__(1)

__CELL_EDGE__(2)
from experiments.wael.tokenizer import ATMTokenizerFast
from transformers import BertForMaskedLM, BertModel
import torch
import torch.nn as nn
from collections import OrderedDict
import tensorflow as tf
import logging
__CELL_EDGE__(3)
logging.basicConfig(filename='sid-training.log', level=logging.WARNING)
logger = logging.getLogger(__name__)
__CELL_EDGE__(4)
tokenizer_path = '/home/ec2-user/sid_migration/atm_model/tokenizer.model'
checkpoint_dir = '/home/ec2-user/sid_migration/atm_model/'
__CELL_EDGE__(5)
def load_atm_tokenizer(tokenizer_path: str):
    tokenizer_dict = {
        # For the case of ATM tokenizer_path should be the file path, not directory as in HF!!!
        "vocab_file": tokenizer_path,
        "mask_token": '[MASK]',
        "bos_token": '<s>',
        "eos_token": '</s>',
        "cls_token": '<s>',
        "pad_token": '[PAD]',
        "sep_token": "</s>",
        "unk_token": "<unk>"
    }
    return ATMTokenizerFast(**tokenizer_dict)
atm_tokenizer = load_atm_tokenizer(tokenizer_path)
__CELL_EDGE__(6)
from transformers import BertConfig, T5Config, AutoConfig

MODEL_TYPE_TO_ENCODER_PATH = {
    BertConfig.model_type: lambda m: m.bert,
#     MT5Config.model_type: lambda m: m.encoder.encoder,
#     T5Config.model_type: lambda m: m.encoder.encoder
}

MODEL_TYPE_TO_MLM_CLASS = {
    BertConfig.model_type: BertForMaskedLM,
#     RobertaConfig.model_type: PreLnForMaskedLM,
#     PreLnConfig.model_type: PreLnForMaskedLM,
#     MT5Config.model_type: MT5ForMaskedLM
}

def load_model_from_pretrained(
        model_path: str,
        freeze_encoder: bool = False):
    autoconfig_args = {
        "hidden_dropout_prob": 0.0,
        "attention_probs_dropout_prob": 0.0
    } if freeze_encoder else dict()

    student_config = AutoConfig.from_pretrained(model_path, **autoconfig_args)
    model = MODEL_TYPE_TO_MLM_CLASS[student_config.model_type].from_pretrained(
        model_path, config=student_config)

    return model, student_config
__CELL_EDGE__(7)
# load atm model
student, config = load_model_from_pretrained(checkpoint_dir, freeze_encoder=False)
atm_model = MODEL_TYPE_TO_ENCODER_PATH[config.model_type](student)
__CELL_EDGE__(8)
# display config
config
__CELL_EDGE__(9)
# test the atm model if it works with toy exmaples
encoded_ids = atm_tokenizer.batch_encode_plus(["show me toys", "buy me a gift"], padding=True, return_tensors='pt')
atm_model.eval()
outputs = atm_model(**encoded_ids)
__CELL_EDGE__(10)
outputs
__CELL_EDGE__(11)
from torch.utils.data import Dataset, DataLoader
import pandas as pd
import numpy as np
import json
__CELL_EDGE__(12)
def mkdir(dirpath, overwrite=False, exist_ok=False):
    """
    If dirpath does not exist, create dirpath.
    If overwrite is True, deletes any existing dir or file and create the dir.

    By default directory must not exist. Otherwise overwrite must
    be set to True. https://stackoverflow.com/a/273227/6623200

    Args:
        dirpath (str): Path to the directory to create
        overwrite (bool): If True, deletes any currently existing file or dir at dirpath.
                          If False, an existing dir will be unchanged.
        exist_ok (bool): If exist_ok is False (the default), a FileExistsError is raised if the dirpath already exists.
    """
    # guarantee that the input is real directory, not empty string or '~'
    dirpath = os.path.abspath(os.path.expanduser(dirpath))

    if overwrite:
        rm_r(dirpath)

    try:
        os.makedirs(dirpath, exist_ok=exist_ok)
    except OSError:
        if not os.path.isdir(dirpath):
            raise
__CELL_EDGE__(13)
ASR_TOKEN_MAX_LENGTH = 15
BERT_TOKEN_MAX_LENGTH = 15

NUM_FEATURES = []
BIN_FEATURES = ('gaz','itemname_ind','phrase_pos','phrase_neg')
CAT_FEATURES = ('product_name','h1_intent')
INTENTS_SET = ('BuyBookIntent', 'BrowseBookIntent','SearchItemIntent', 'BuyItemIntent', 'CheckPriceIntent', 'SearchItemIntent Deals', 'BuyItemIntent Reorder')

class SIDDataset(Dataset):
    def __init__(self, fpath, tokenizer, sep='@', parameters_fp=None, params_save_dir=None):
        self.tokenizer = tokenizer
        
        self.df = pd.read_csv(fpath, sep=sep, error_bad_lines=False)
        if parameters_fp:
            with open(parameters_fp, 'r') as f:
                self.parameters = json.load(f)
        else:
            self.parameters = {}
            self.compute_extraction_parameters()
            if os.path.isdir(params_save_dir):
                with open(os.path.join(params_save_dir, 'encoder_parameters.json'), 'w') as f:
                    json.dump(self.parameters, f)
            else:
                raise NotADirectoryError(f'params_save_df is not a valid directory')
        
    def add_parameter_encoder(self, column_name):
        """
        Adds to extractor_parameters the encoder for converting column_name into one-hot vectors
        :param df: the dataframe on which extract the encoder
        :param column_name: the name of the signal
        :return: void
        """
        encoder = {}
#         print(column_name)
#         print(self.df.columns)
#         print(self.df['product_name'][:2])
#         print(self.df[column_name][:2])
        for index, value in enumerate(self.df[column_name].unique()):
            encoder[value] = index
        self.parameters[column_name + '_encoder'] = encoder
    
    def add_standardization_parameters(self, column_name):
        pass
    
    def compute_extraction_parameters(self):
        # PARAMETERS FOR CATEGORICAL FEATURES
        for categorical_feature in CAT_FEATURES:
            self.add_parameter_encoder(categorical_feature)

        # PARAMETERS FOR NUMERICAL FEATURES
        for numerical_feature in NUM_FEATURES:
            self.add_standardization_parameters(numerical_feature)
    
    @staticmethod
    def extract_label(intent):
        return 1 if intent in INTENTS_SET else 0
    
    def extract_addition_features(self, row):
        features = []

        # ADDING BINARY FEATURES
        binary_feats = row[list(BIN_FEATURES)].to_numpy()
        features.append(binary_feats)

        # ADDING CATEGORICAL FEATURES
        for categorical_feature in CAT_FEATURES:
            encoder = self.parameters[categorical_feature + '_encoder']
            categorical_feature_matrix = self.convert_categorical_feature_into_binary_features(
                row[categorical_feature], encoder)
            features.append(categorical_feature_matrix)
        features = np.concatenate(features).astype(np.float)
        return features
    
    def convert_categorical_feature_into_binary_features(self, categorical_feature, feature_encoder):
        """
        converts categorical features into a numerical format (i.e., one hot vectors)
        :param categorical_features: list of strings
        :param feature_encoder: specifies whether we want to use a specific string to number converter. It can be None
        :return: the features in binary format, the feature encoder
        """
        number_of_categories = len(feature_encoder)
        feature_matrix = np.zeros(number_of_categories)
        if categorical_feature in feature_encoder:
            feature_matrix[feature_encoder[categorical_feature]] = 1
        return feature_matrix
    
    @staticmethod
    def extract_asr_token_scores(utterance_asr):
        scores = {'l': 1, 'm': 2, 'h': 3}
        ASR_token = []
        try:
            for word in utterance_asr.split():
                asr_bin = word.split('_')[-1]
                score = scores.get(asr_bin, 0)
                ASR_token.append(score)

                if len(ASR_token) == ASR_TOKEN_MAX_LENGTH:
                    return ASR_token
        except Exception as e:
#             print(utterance_asr)
            logger.debug(e, exc_info=True)

        ASR_token += [0]*(ASR_TOKEN_MAX_LENGTH-len(ASR_token))
        return ASR_token
    
    def batch_encode(self, utt_ori, padding=True):
#         encode utterance into bert vectors
        return self.tokenizer.batch_encode_plus(utt_ori, 
                                                padding=padding, 
                                                return_tensors='pt',
                                                max_length=BERT_TOKEN_MAX_LENGTH,
                                                truncation=True
                                               )
    
    @staticmethod
    def get_length(utterance):
        return len(utterance.split())
    
    def __len__(self):
        return len(self.df)
    
    def __getitem__(self, idx):
        row = self.df.iloc[idx]
        add_feats =  self.extract_addition_features(row)
        asr_token_scores = self.extract_asr_token_scores(row['utterance'])
        label = self.extract_label(row['intent'])
        
        return {
            'utterance_ori': row['utterance_ori'], 
            'additional_features': add_feats,
            'asr_token_scores': asr_token_scores,
            'label': label
        }

def collate_fn_sid(batch):
#     collate function to customize the batch data
    utt_ori = [record['utterance_ori'] for record in batch]
    add_feats = np.array([record['additional_features'] for record in batch])
    asr_feats = [record['asr_token_scores'] for record in batch]
    labels = [record['label'] for record in batch]
    
    batch_data = {
        'utterance_ori': utt_ori, 
        'additional_features': torch.from_numpy(add_feats),
        'asr_token_scores': torch.tensor(asr_feats),
        'labels': torch.tensor(labels).float()
    }    
    return batch_data

# def get_sid_input_dim(bert_dim, dataset):
#     example = dataset[0]
#     input_dim = bert_dim
#     input_dim += len(example['additional_features'])
#     input_dim += len(example['asr_token_scores'])
#     return input_dim
__CELL_EDGE__(14)
from tqdm.notebook import tqdm

def check_device_available():
    if torch.cuda.is_available():
        device = torch.device("cuda")
        return device
        print(f'There are {torch.cuda.device_count()} GPU(s) available.')
        print('Device name:', torch.cuda.get_device_name(0))

    else:
        print('No GPU available, using the CPU instead.')
        device = torch.device("cpu")
        return device


def get_bert_vectors_generator(dataset_path, tokenizer, bert_model, batch_size, parameters_fp=None, shuffle=False, params_save_dir=None, asr_feat=True):
    # Due to the dataset size, it's impossible to load all the bert vectors 
    # of all utterances into memoery. This function wraps a few aux functions
    # to bathify the data and extract features per batch
    sid_dataset = SIDDataset(fpath=dataset_path, 
                             tokenizer=tokenizer, 
                             parameters_fp=parameters_fp,
                             params_save_dir=params_save_dir
                            )
    
    sid_dataloader = DataLoader(sid_dataset,
                                batch_size=batch_size, 
                                collate_fn=collate_fn_sid, 
                                shuffle=shuffle)
    
    device = check_device_available()
    bert_model.to(device)
    bert_model.eval()
    
    bert_vector_generator = BertVectorsGenerator(data_loader=sid_dataloader,
                                                 bert_model=bert_model,
                                                 data_set=sid_dataset,
                                                 device=device,
                                                 asr_feat = asr_feat
                                                )
    return bert_vector_generator


class BertVectorsGenerator(tf.keras.utils.Sequence):
    # this func does: (1)load data as dataset
    # (2) encode utterances and feed them to bert model
    # (3) concatenate bert outputs with additional features
    # (4) stack outputs of all batches
    def __init__(self, data_loader, bert_model, data_set, device, asr_feat=True):
        self.generator = data_loader
        self.iter = iter(data_loader)
        self.bert_model = bert_model
        self.dataset = data_set
        self.device = device
        self.asr_feat = asr_feat
        
    def __len__(self):
        return len(self.generator)
    
    def __getitem__(self, idx):
#{fact rule=pytorch-disable-gradient-calculation@v1.0 defects=1}
        with torch.no_grad():
#{/fact}
            try:
                batch = next(self.iter)
            except StopIteration:
                self.iter = iter(self.generator)
                batch = next(self.iter)
            bert_input = self.dataset.batch_encode(batch['utterance_ori']).to(self.device)
            bert_outputs = self.bert_model(**bert_input)
            bert_outputs = bert_outputs['last_hidden_state'][:,0].detach().cpu()

            add_feats = batch['additional_features']
            
            if self.asr_feat:
                asr_token_scores = batch['asr_token_scores']
                bert_outputs = torch.cat([bert_outputs, add_feats, asr_token_scores], axis=1).numpy()
            else:
                bert_outputs = torch.cat([bert_outputs, add_feats], axis=1).numpy()
            
            labels = batch['labels'].numpy()
            
        return bert_outputs, labels
__CELL_EDGE__(15)
torch.set_printoptions(precision=6)
__CELL_EDGE__(16)
from keras.models import load_model
from official.nlp import optimization
import os
__CELL_EDGE__(17)
# functions to create lwm model
def build_classifier_model(num_features, simple=False):
    if not simple:
        cls_model = tf.keras.Sequential([
            tf.keras.layers.Input(shape=(num_features,), name='bert_vectors'),
            tf.keras.layers.Dropout(0.2),
            tf.keras.layers.Dense(600, activation='relu'),
            tf.keras.layers.Dropout(0.2),
            tf.keras.layers.Dense(300, activation='relu'),
            tf.keras.layers.Dropout(0.1),
            tf.keras.layers.Dense(100, activation='relu'),
            tf.keras.layers.Dropout(0.1),
            tf.keras.layers.Dense(50, activation='relu'),
            tf.keras.layers.Dropout(0.1),
            tf.keras.layers.Dense(1)
        ])
    else:
        cls_model = tf.keras.Sequential([
            tf.keras.layers.Input(shape=(num_features,), name='bert_vectors'),
            tf.keras.layers.Dropout(0.2),
            tf.keras.layers.Dense(1000, activation='relu'),
            tf.keras.layers.Dropout(0.1),
            tf.keras.layers.Dense(1)
        ])        
    
    return cls_model
__CELL_EDGE__(18)
def fit_nn_tf_gen(train_gen, valid_gen, epochs, init_lr, simple, model_save_dir, num_features=None, early_stop=True):
    """
    Train Neural Network model with TensorFlow
    """
    
    steps_per_epoch = len(train_gen)
    if not num_features:
        num_features = 1050
    num_train_steps = steps_per_epoch * epochs
    num_warmup_steps = int(0.1*num_train_steps)
    
    
    classifier_model = build_classifier_model(num_features, simple=simple)
    loss = tf.keras.losses.BinaryCrossentropy(from_logits=True)
    metrics = [tf.keras.metrics.BinaryAccuracy()]
    
    
    callbacks = [
        tf.keras.callbacks.EarlyStopping(
            # Stop training when `val_loss` is no longer improving
            monitor="val_binary_accuracy",
            # "no longer improving" being defined as "no better than 1e-4 less"
            min_delta=1e-4,
            # "no longer improving" being further defined as "for at least 2 epochs"
            patience=5,
            verbose=1,
            restore_best_weights=True)
    ]

    optimizer = optimization.create_optimizer(init_lr=init_lr,
                                              num_train_steps=num_train_steps,
                                              num_warmup_steps=num_warmup_steps,
                                              optimizer_type='adamw')
    
    classifier_model.compile(optimizer=optimizer,
                             loss=loss,
                             metrics=metrics)
    if early_stop:
        history = classifier_model.fit(train_gen,
                                       validation_data=valid_gen,
                                       verbose=1,
                                       epochs=epochs,
                                       callbacks=callbacks)
    else:
        history = classifier_model.fit(train_gen,
                                       validation_data=valid_gen,
                                       verbose=1,
                                       epochs=epochs)    
    classifier_model.save(model_save_dir)
#     classifier_model.summary()
    return history
__CELL_EDGE__(19)
import json

def train_loop():

    LINEAR_SIZE=1000
    BATCH_SIZE = 64
    INIT_LR = 3e-4
    EPOCHS=20
    EARLY_STOP = True
    asr_feat_available = False
    if asr_feat_available:
        NUMBER_FEATURES=1050
    else:
    #     without ASR
        NUMBER_FEATURES=1035 
    
    train_data_paths = [
        ('one_year_mod_jp_addafa','/home/ec2-user/sid_migration/OLIVIA_SID/multi_mod_with_jp/multi-lang-train-oneyear-mod-with-jp-addmore-addafa.csv'),
#         ('two_years','/home/ec2-user/sid_migration/OLIVIA_SID/multi-lang-train.csv')
    ]
    # model_selections = [('1_layer', True), ('4_layers', False)]
    model_selections = [('1_layer', True)]

    for dname, train_fp in train_data_paths:
        for model_name, simple_val in model_selections:
            
            model_save_dir = os.path.join('/home/ec2-user/models', f'{dname}_{model_name}_asr_{asr_feat_available}_model')
            save_dir = os.path.join(model_save_dir, "model_artifacts")
            # create directory        
            if not os.path.exists(save_dir):
                os.makedirs(save_dir)
            
            print(save_dir)
            
            conf_json = {'dpath': train_data_paths, 
                         'model': model_selections,
                         'asr_bin': asr_feat_available,
                         'num_feats': NUMBER_FEATURES,
                         'hidden_size': LINEAR_SIZE,
                         'batch_size':BATCH_SIZE,
                         'init_lr': INIT_LR,
                         'epochs':EPOCHS
                        }
            print(conf_json)
            with open(os.path.join(save_dir, 'setup.cfg'), 'w') as f:
                json.dump(conf_json, f)
            
            # get train data generator     
            train_gen = get_bert_vectors_generator(
                dataset_path=train_fp, 
                tokenizer=atm_tokenizer, 
                bert_model=atm_model,
                batch_size=BATCH_SIZE,
                shuffle=True,
                params_save_dir=save_dir,
                asr_feat=asr_feat_available
            )

            val_gen= get_bert_vectors_generator(
                dataset_path='OLIVIA_SID/multi_mod_with_jp/multi-lang-dev-mod-with-jp.csv', 
                tokenizer=atm_tokenizer, 
                bert_model=atm_model,
                batch_size=BATCH_SIZE,
                shuffle=False,
                parameters_fp=os.path.join(save_dir,'encoder_parameters.json'),
                asr_feat=asr_feat_available
            )
        
            tf_sid_model = fit_nn_tf_gen(
                train_gen=train_gen,
                valid_gen=val_gen,
                epochs=EPOCHS, 
                init_lr=INIT_LR,
                simple=simple_val,
                model_save_dir=save_dir,
                num_features=NUMBER_FEATURES,
                early_stop=EARLY_STOP
            )     
__CELL_EDGE__(20)
train_loop()
__CELL_EDGE__(21)
from sklearn.linear_model import LogisticRegression, SGDClassifier
from sklearn.metrics import roc_auc_score, f1_score, recall_score, precision_score
__CELL_EDGE__(22)
def extract_labels_from_csv(datamart_df, intents_set):
    labels = []
    for _, row in datamart_df.iterrows():
        if row['intent'] in intents_set:
            labels.append(1)
        else:
            labels.append(0)
    return labels
__CELL_EDGE__(23)
def model_metrics(data):
    auc = roc_auc_score(data['label'], data['model_prediction_score'])
    print('==================================================')
    print(f'model auc: {auc}')
    print()

    for i in np.linspace(0, 1, num=101):
        print(f'========= threshold: {i} =============')
        y_pred = np.where(data['model_prediction_score'] > i, 1, 0)
        f1 = f1_score(data['label'], y_pred)
        p = precision_score(data['label'], y_pred)
        r = recall_score(data['label'], y_pred)
        print(f'precision: {p}')
        print(f'recall: {r}')
        print(f'f1: {f1}')
        print()

def test_model(
        data_test_fp,
        directory,
        tokenizer,
        bert_model,
        parameters_fp,
        asr_feat):
    data_test_predictions = model_inference_nn_tf(data_test_fp, 
                                                  directory, 
                                                  tokenizer, 
                                                  bert_model, 
                                                  parameters_fp,
                                                  asr_feat
                                                 )
    model_metrics(data_test_predictions)
    return data_test_predictions

def get_bert_vectors(dataset_path, tokenizer, bert_model, batch_size, parameters_fp=None, debug=False, asr_feat=True):
    # this func does: (1)load data as dataset
    # (2) encode utterances and feed them to bert model
    # (3) concatenate bert outputs with additional features
    # (4) stack outputs of all batches
    sid_dataset = SIDDataset(fpath=dataset_path, tokenizer=tokenizer, parameters_fp=parameters_fp)
    sid_dataloader = DataLoader(sid_dataset,batch_size=batch_size, 
                                 collate_fn=collate_fn_sid, 
                                 shuffle=False)
    device = check_device_available()
    bert_model.to(device)
    bert_model.eval()
    
    bert_vectors = []
    sid_labels = []
    ct = 0
#{fact rule=pytorch-disable-gradient-calculation@v1.0 defects=1}
    with torch.no_grad():
#{/fact}
        for batch in tqdm(sid_dataloader):
            #  print('====='*5)
            #  print(batch)
            ct +=1
            #  if ct%1000 == 0:
            #  print(f'processed {ct} batches')
            bert_input = sid_dataset.batch_encode(batch['utterance_ori']).to(device)
            bert_outputs = bert_model(**bert_input)
            bert_outputs = bert_outputs['last_hidden_state'][:,0].detach().cpu()

            add_feats = batch['additional_features']
            if asr_feat:
                asr_token_scores = batch['asr_token_scores']
                #  print(bert_outputs.size())
                #  print(add_feats.size())
                #  print(asr_token_scores.size())
                bert_outputs = torch.cat([bert_outputs, add_feats, asr_token_scores], axis=1)
            else:
                bert_outputs = torch.cat([bert_outputs, add_feats], axis=1)

            bert_vectors.append(bert_outputs)
        
            labels = batch['labels']
            sid_labels.append(labels)

            #  print(bert_outputs.size())
            if ct == 1000 and debug:
                break
            
    bert_vectors = torch.cat(bert_vectors, axis=0)
    sid_labels = torch.cat(sid_labels, axis=0)
    return bert_vectors, sid_labels

def model_inference_nn_tf(
        data_test_fp,
        directory,
        tokenizer,
        bert_model,
        parameters_fp,
        asr_feat):
    
    X_test, y_test = get_bert_vectors(dataset_path=data_test_fp, 
                                      tokenizer=tokenizer, 
                                      bert_model=bert_model,
                                      batch_size=64,
                                      parameters_fp=parameters_fp,
                                      asr_feat=asr_feat
                                     )
    
    data_test = pd.read_csv(data_test_fp, sep='@', error_bad_lines=False)
    data_test['label'] = extract_labels_from_csv(data_test, INTENTS_SET)
        
    tf_nn_model = load_model(directory, compile=False)
    
    tf_nn_model = tf.keras.Sequential([
        tf_nn_model,
        tf.keras.layers.Activation('sigmoid')
    ])
        
    X_inference = X_test.numpy()

    data_test['model_prediction_score'] = tf_nn_model.predict(X_inference)
    
    print("X_inference[1] len: ", len(X_inference[1]))
    print(type(X_inference[1]))
    #print("test_data['model_prediction_score'] shape: ", len(test_data['model_prediction_score'][1]))
    print(data_test['model_prediction_score'][1])
    print("======")

    return data_test
__CELL_EDGE__(24)
def get_results(test_data_results, col_name, f_out):
    
    for i in range(50):
        ll = round((i + 1) * 0.01, 2)

        for j in range(49):
            hh = round((j + 1) * 0.01 + 0.5, 2)
            total = len(test_data_results['label'])
            fa_detected = 0

            fa_missed = 0
            fa_ns = 0
            ts_rejected = 0
            ts_left = 0
            ts_ns = 0
            for score, label in zip(
                    test_data_results['model_prediction_score'], test_data_results['label']):

                if label == 0:
                    if score < ll:
                        fa_detected += 1
                    elif score >= hh:
                        fa_missed += 1
                    else:
                        fa_ns += 1
                elif label == 1:
                    if score < ll:
                        ts_rejected += 1
                    elif score >= hh:
                        ts_left += 1
                    else:
                        ts_ns += 1
            out = "{},{},{},{},{},{},{},{},{},{:.2%},{:.2%},{:.2%},{:.2%},{:.2%},{:.2%}\n".format(
                col_name,
                ll,
                hh,
                fa_detected,
                fa_missed,
                fa_ns,
                ts_rejected,
                ts_left,
                ts_ns,
                float(
                    fa_detected / total),
                float(
                    fa_missed / total),
                float(
                    fa_ns / total),
                float(
                    ts_rejected / total),
                float(
                    ts_left / total),
                float(
                    ts_ns / total))
            f_out.write(out)    
__CELL_EDGE__(25)
def get_fa_metrics(test_data_results, directory, locale=None, dev=False):
    if locale:
        threshold_path = os.path.join(directory, f'thresholds/{locale}')
    else:
        threshold_path = os.path.join(directory, 'thresholds')
    mkdir(threshold_path)
    if dev:
        output_file = os.path.join(threshold_path, 'dev-thresholds.tsv')
    else:
        output_file = os.path.join(threshold_path, 'thresholds.tsv')

    with open(output_file, 'w') as f_out:
        f_out.write(
            "cohort,ll,hh,fa_detected,fa_missed,fa_ns,ts_rejected,ts_left,ts_ns,fa_detected,fa_missed,fa_ns,ts_rejected,ts_left,ts_ns\n")

        for nlu_intent in INTENTS_SET:
            results_by_intent = test_data_results[test_data_results.h1_intent == nlu_intent]

            if (len(results_by_intent) > 0):
                get_results(results_by_intent, nlu_intent, f_out)

            for itm_ind in [0,1]:
                results_by_intent_by_itm = test_data_results[(test_data_results.h1_intent == nlu_intent)&(test_data_results.itemname_ind == itm_ind)]
                col_name = nlu_intent + '_' + str(itm_ind)

                if (len(results_by_intent_by_itm) > 0):
                    get_results(results_by_intent_by_itm, col_name, f_out)

    print(f'saving thresholds {output_file}')
    df_thresholds = pd.read_csv(output_file)
    return df_thresholds
__CELL_EDGE__(26)
from sklearn import preprocessing
min_max_scaler = preprocessing.MinMaxScaler()
__CELL_EDGE__(27)
def find_threshold(threshold_fp):
    data=pd.read_csv(threshold_fp)
    
    conditions = []
    intents=data['cohort'].unique()
    for i in intents:
        x=data[data['cohort']==i].copy()
        #normalize fa_detected
        temp = x['fa_detected.1'].str.rstrip('%').astype('float') / 100.0
        temp=temp.values.reshape([-1,1])
        x.loc[:,'norm_fa_detected']=min_max_scaler.fit_transform(temp)   
        #normalize ts_rejected
        temp = x['ts_rejected.1'].str.rstrip('%').astype('float') / 100.0
        temp=temp.values.reshape([-1,1])
        x.loc[:,'norm_ts_rejected']=min_max_scaler.fit_transform(temp)
        #pick the optimal point
        x.loc[:,'diff1']=x['norm_fa_detected']-x['norm_ts_rejected']
        x=x.reset_index()
        ll=x.iloc[x['diff1'].idxmax()]['ll']
        #start to identify the higher threshold
        z=x[x['ll']==ll].copy()
        #normalize fa_missed
        temp = z['fa_missed.1'].str.rstrip('%').astype('float') / 100.0
        temp=temp.values.reshape([-1,1])
        z.loc[:,'norm_fa_missed']=min_max_scaler.fit_transform(temp)   
        #normalize ts_left
        temp = z['ts_left.1'].str.rstrip('%').astype('float') / 100.0
        temp=temp.values.reshape([-1,1])
        z.loc[:,'norm_ts_left']=min_max_scaler.fit_transform(temp)
        #pick the optimal point
        z.loc[:,'diff2']=z['norm_ts_left']-z['norm_fa_missed']
        z=z.reset_index()
        hh=z.iloc[z['diff2'].idxmax()]['hh']
        out ="{}\t{}\t{}\n".format(i,float(ll),float(hh))
        print(out)
        conditions.append((i,float(ll),float(hh)))
    return conditions
__CELL_EDGE__(28)
def get_threshold_results(threshold_fp, conditions):
    data = pd.read_csv(threshold_fp)
    rows = []
    for intent, ll, hh in conditions:
        drow = data.loc[(data.cohort==intent)&(data.ll==ll)&(data.hh==hh)]
        rows.append(drow)
    return pd.concat(rows, axis=0)
__CELL_EDGE__(29)
# test data path
test_data_fps = {
    'en-in': '/home/ec2-user/sid_migration/OLIVIA_SID/en-in/test.csv',
    'en-gb': '/home/ec2-user/sid_migration/OLIVIA_SID/en-gb/test.csv',
    'en-us': '/home/ec2-user/sid_migration/OLIVIA_SID/en-us/sid-test-afa.csv',
    'de-de': '/home/ec2-user/sid_migration/OLIVIA_SID/de-de/test.csv',
    'ja-jp': '/home/ec2-user/sid_migration/OLIVIA_SID/ja-jp/sid-test-data-update.csv'
}
__CELL_EDGE__(30)
test_locale = 'ja-jp'
__CELL_EDGE__(31)
#  load test data and model dir

# data_test_fp ='OLIVIA_SID/en-us/sid-test-afa.csv'
data_test_fp = test_data_fps[test_locale]
# data_test_fp ='/home/ec2-user/sid_migration/OLIVIA_SID/ja-jp/sid-test-data-update.csv'
load_model_dir = '/home/ec2-user/models/one_year_mod_jp_addafa_1_layer_asr_False_model/model_artifacts/'
# load_model_dir = '/home/ec2-user/models/one_year_mod_jp_addafa_4_layers_asr_False_model/model_artifacts/'
# load_model_dir = '/home/ec2-user/models/one_year_mod_jp_more_1_layer_asr_True_model/model_artifacts/'
params_fp = os.path.join(load_model_dir, 'encoder_parameters.json')

print(len(pd.read_csv(data_test_fp, sep='@')))
__CELL_EDGE__(32)
test_output= test_model(data_test_fp, 
                        load_model_dir, 
                        tokenizer=atm_tokenizer, 
                        bert_model=atm_model,
                        parameters_fp=params_fp,
                        asr_feat=False
                       )
__CELL_EDGE__(33)
len(test_output)
__CELL_EDGE__(34)
# threshold tuning
__CELL_EDGE__(35)
fa_locale = test_locale
dev=False
__CELL_EDGE__(36)
fa_metrics = get_fa_metrics(test_output, load_model_dir, locale=fa_locale, dev=dev)
__CELL_EDGE__(37)
th_file_name = f"thresholds/{fa_locale}/dev-thresholds.tsv" if dev else f"thresholds/{fa_locale}/thresholds.tsv"
__CELL_EDGE__(38)
th_file_name
__CELL_EDGE__(39)
th_conds = find_threshold(threshold_fp=os.path.join(load_model_dir,th_file_name))
__CELL_EDGE__(40)
get_threshold_results(threshold_fp=os.path.join(load_model_dir,th_file_name), 
                      conditions=th_conds)
__CELL_EDGE__(41)

