def __CELL_EDGE__(x):
	pass
__CELL_EDGE__(0)
from matplotlib import pyplot

import math
import numpy

import tensorflow as tf
import tensorflow_hub as tf_hub
import tensorflow_text

import matplotlib.font_manager as fm
fprop = fm.FontProperties(fname='NotoSansJP-Regular.otf')
__CELL_EDGE__(1)
# source_key_embedder_path = 'production_model/source_key_embedder_slaam_500k_b_transfer_only'
# source_value_embedder_path = 'production_model/source_value_embedder_slaam_500k_b_transfer_only'

source_key_embedder_path = 'production_model/source_key_embedder_slaam_500k_c_fine_tuned'
source_value_embedder_path = 'production_model/source_value_embedder_slaam_500k_c_fine_tuned'
base_embedder_path = 'production_model/base_embedder_slaam_500k_c_fine_tuned'

source_key_embedder = tf.keras.models.load_model(source_key_embedder_path)
source_value_embedder = tf.keras.models.load_model(source_value_embedder_path)
base_embedder = tf.keras.models.load_model(base_embedder_path)

# muse_model_name = "universal-sentence-encoder-multilingual-large/3"
# muse_model_url = f"https://tfhub.dev/google/{muse_model_name}"
# muse_embedder = tf_hub.load(muse_model_url)
__CELL_EDGE__(2)
source_value_embedder.summary()
tf.keras.utils.plot_model(source_value_embedder, show_shapes=True)
__CELL_EDGE__(3)
# Compute embeddings for a given query word, pre-transformation and post-transformation
# query = "Clay (008)"
query = "Clay"
transformed_embedder = source_value_embedder

# base_embedding = base_embedder(tf.constant([query_key]))[0]
# transformed_embedding = source_key_embedder(tf.constant([query_key]))[0]
base_embedding = base_embedder(tf.constant([query]))[0]
transformed_embedding = transformed_embedder(tf.constant([query]))[0]

similarity = 0.5 * numpy.dot(base_embedding, transformed_embedding) + 0.5

print(f"Pre-post transformation self-similarity for '{query}': {similarity}")

# Compute pre-transformation embedding similarity for similar words
similar_base_words = ["Dirt", "Mud", "Brick"]
similar_base_embeddings = {}
for word in similar_base_words:
    comparison_embedding = base_embedder(tf.constant([word]))[0]
    similar_base_embeddings[word] = comparison_embedding
    
    base_similarity = 0.5 * numpy.dot(base_embedding, comparison_embedding) + 0.5
    print(f"Similarity for base '{query}' and base '{word}': {base_similarity}")
    
    transform_similarity = 0.5 * numpy.dot(transformed_embedding, comparison_embedding) + 0.5
    print(f"Similarity for transformed '{query}' and base '{word}': {transform_similarity}")

# Compute post-transformation embedding similarity for similar words
similar_transformed_words = ["Red", "Tan",]
similar_transformed_embeddings = {}
for word in similar_transformed_words:
    comparison_embedding = transformed_embedder(tf.constant([word]))[0]
    similar_transformed_embeddings[word] = comparison_embedding
    
    base_similarity = 0.5 * numpy.dot(base_embedding, comparison_embedding) + 0.5
    print(f"Similarity for base '{query}' and transformed '{word}': {base_similarity}")
    
    transform_similarity = 0.5 * numpy.dot(transformed_embedding, comparison_embedding) + 0.5
    print(f"Similarity for transformed '{query}' and transformed '{word}': {transform_similarity}")
__CELL_EDGE__(4)
from sklearn.manifold import TSNE
from sklearn.decomposition import PCA

X = [base_embedding, transformed_embedding] + [
    similar_base_embeddings[word]
    for word in similar_base_words
] + [
    similar_transformed_embeddings[word]
    for word in similar_transformed_words
]

labels = [query, query] + similar_base_words + similar_transformed_words
# X = [[0, 0, 0], [0, 1, 1], [1, 0, 1], [1, 1, 1]]
X = numpy.array(X)
X = X.astype(numpy.float)

print(X.shape)

# X_embedded = TSNE(n_components=2).fit_transform(X)
X_embedded = PCA(n_components=2).fit_transform(X)
X_embedded.shape
__CELL_EDGE__(5)
pyplot.title('PCA for Visualizing Embeddings')

for i in range(len(X_embedded)):
    x, y = X_embedded[i]
    pyplot.scatter(x, y, marker="*", color="red")
#{fact rule=notebook-variable-redefinition@v1.0 defects=0}
    pyplot.text(x+0.03, y+0.03, labels[i], fontsize=9)
#{/fact}

pyplot.show()
__CELL_EDGE__(6)
X = [
    base_embedder(tf.constant(["What You Get"]))[0],
    source_key_embedder(tf.constant(["What You Get"]))[0],
    base_embedder(tf.constant(["Contenu de la Boîte"]))[0],
    source_key_embedder(tf.constant(["Contenu de la Boîte"]))[0],
    base_embedder(tf.constant(["セット内容"]))[0],
    source_key_embedder(tf.constant(["セット内容"]))[0],
    # source_key_embedder(tf.constant(["number of pieces"]))[0],
    source_key_embedder(tf.constant(["total eaches"]))[0],
]

labels = [
    "What You Get",
    "What You Get (*)",
    "Contenu de la Boîte",
    "Contenu de la Boîte (*)",
    "セット内容",
    "セット内容 (*)",
    # "number of pieces",
    "total eaches",
]

X = numpy.array(X)
X = X.astype(numpy.float)

print(X.shape)

# X_embedded = TSNE(n_components=2).fit_transform(X)
X_embedded = PCA(n_components=2).fit_transform(X)
X_embedded.shape

# Invert X_embedded
for i in range(len(X_embedded)):
    X_embedded[i][0] = -1 * X_embedded[i][0]
__CELL_EDGE__(7)
import math
__CELL_EDGE__(8)
# pyplot.title('2D PCA for Visualizing Embeddings')

'''
pyplot.scatter(X_embedded[0][0], X_embedded[0][1], marker="o", facecolors="none")
pyplot.scatter(X_embedded[1][0], X_embedded[1][1], marker="o")

pyplot.scatter(X_embedded[2][0], X_embedded[2][1], marker="o", facecolors="none")
pyplot.scatter(X_embedded[3][0], X_embedded[3][1], marker="o")
'''

label_offsets = [
    [-0.02, -0.08],
    [0.03, 0.03],
    [0.03, -0.04],
    [-0.37, -0.21],
    [-0.12, 0.07],
    [-0.2, 0.06],
    [-0.25, -0.04],
]

colors = [
    "blue",
    "blue",
    "green",
    "green",
    "purple",
    "purple",
    "red",
]

for i in range(len(X_embedded) - 1):
    x, y = X_embedded[i]
    if i % 2 is 0:
        pyplot.scatter(x, y, marker="o", facecolors="none", edgecolors=colors[i])
    else:
        pyplot.scatter(x, y, marker="o", color=colors[i])
        
        prev_x, prev_y = X_embedded[i-1]
        dx = x - prev_x
        dy = y - prev_y
        magnitude = math.sqrt(dx*dx + dy*dy)
        
        bx = prev_x + 0.01 * dx / magnitude
        by = prev_y + 0.01 * dy / magnitude
        
        pyplot.arrow(bx, by, dx, dy, head_width=0.03, length_includes_head=True, edgecolor=colors[i], facecolor="none")
        
    if i is 4 or i is 5:
        pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontproperties=fprop, fontsize=11, color=colors[i])
    else:
        pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontsize=11, color=colors[i])
        
x, y = X_embedded[-1]
pyplot.scatter(x, y, marker="*", color=colors[-1], s=100)
pyplot.text(x + label_offsets[-1][0], y + label_offsets[-1][1], labels[-1], fontsize=11, color=colors[-1])

pyplot.show()
__CELL_EDGE__(9)
X = [
    # base_embedder(tf.constant(["coral"]))[0],
    # source_value_embedder(tf.constant(["coral"]))[0],
    base_embedder(tf.constant(["clay"]))[0],
    source_value_embedder(tf.constant(["clay"]))[0],
    base_embedder(tf.constant(["cool sunrise brossé"]))[0],
    source_value_embedder(tf.constant(["cool sunrise brossé"]))[0],
    base_embedder(tf.constant(["モカ"]))[0],
    source_value_embedder(tf.constant(["モカ"]))[0],
    # base_embedder(tf.constant(["エフィカスブルー"]))[0],
    # source_value_embedder(tf.constant(["エフィカスブルー"]))[0],
    source_value_embedder(tf.constant(["red"]))[0],
]

labels = [
    # "coral",
    # "coral (*)",
    "clay",
    "clay (*)",
    "cool sunrise brossé",
    "cool sunrise brossé (*)",
    "モカ",
    "モカ (*)",
    # "エフィカスブルー (base)",
    # "エフィカスブルー (transformed)",
    "red",
]

X = numpy.array(X)
X = X.astype(numpy.float)

print(X.shape)

# X_embedded = TSNE(n_components=2).fit_transform(X)
X_embedded = PCA(n_components=2).fit_transform(X)
X_embedded.shape

# Invert X_embedded
for i in range(len(X_embedded)):
    X_embedded[i][0] = -1 * X_embedded[i][0]
__CELL_EDGE__(10)
# pyplot.title('PCA for Visualizing Embeddings')

'''
for i in range(len(X_embedded)):
    x, y = X_embedded[i]
    pyplot.scatter(x, y, marker="*", color="red")
    pyplot.text(x+0.03, y+0.03, labels[i], fontsize=9)
'''

# pyplot.title('2D PCA for Visualizing Embeddings')

'''
pyplot.scatter(X_embedded[0][0], X_embedded[0][1], marker="o", facecolors="none")
pyplot.scatter(X_embedded[1][0], X_embedded[1][1], marker="o")

pyplot.scatter(X_embedded[2][0], X_embedded[2][1], marker="o", facecolors="none")
pyplot.scatter(X_embedded[3][0], X_embedded[3][1], marker="o")
'''

label_offsets = [
    [-0.02, -0.08],
    [-0.04, 0.05],
    [0.09, -0.01],
    [-0.36, 0.15],
    [-0.03, -0.08],
    [-0.04, -0.08],
    [-0.1, -0.06],
]

colors = [
    "blue",
    "blue",
    "green",
    "green",
    "purple",
    "purple",
    "red",
]

for i in range(len(X_embedded) - 1):
    x, y = X_embedded[i]
    if i % 2 is 0:
        pyplot.scatter(x, y, marker="o", facecolors="none", edgecolors=colors[i])
    else:
        pyplot.scatter(x, y, marker="o", color=colors[i])
        
        prev_x, prev_y = X_embedded[i-1]
        dx = x - prev_x
        dy = y - prev_y
        magnitude = math.sqrt(dx*dx + dy*dy)
        
        bx = prev_x + 0.01 * dx / magnitude
        by = prev_y + 0.01 * dy / magnitude
        
        pyplot.arrow(bx, by, dx, dy, head_width=0.03, length_includes_head=True, edgecolor=colors[i], facecolor="none")
        
    if i is 4 or i is 5:
        pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontproperties=fprop, fontsize=11, color=colors[i])
    else:
        pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontsize=11, color=colors[i])
        
x, y = X_embedded[-1]
pyplot.scatter(x, y, marker="*", color=colors[-1], s=100)
pyplot.text(x + label_offsets[-1][0], y + label_offsets[-1][1], labels[-1], fontsize=11, color=colors[-1])

pyplot.show()
__CELL_EDGE__(11)
ingredients_list = "5-HTP (5-hydroxytryptophan) 100 mg, Gelatin, Microcrystalline Cellulose, Silicon Dioxide, Magnesium Stearate, Titanium Dioxide, FD&C Red #40, FD&C Blue #1"
# ingredients_list = "Gelatin, Microcrystalline Cellulose, Silicon Dioxide, Magnesium Stearate, Titanium Dioxide, FD&C Red #40, FD&C Blue #1"
# ingredients_list = "Microcrystalline Cellulose, Silicon Dioxide, Magnesium Stearate, Titanium Dioxide, FD&C Red #40, FD&C Blue #1"

# ingredients_list = "Enzyme, Fiber, Amino Acids (Omega 3 6 9, GLA, Arginine), Flavonoids, Immune Vitamins (Vitamin A, Vitamin B Complex, Vitamin C, Vitamin K and Biotin), Minerals (Magnesium, Zinc, Calcium, Potassium), Chlorophyll, Phytonutrients and Antioxidants."
ingredients_list_2 = "5-HTP (5-hydroxytryptophan) 100 mg, Microcrystalline Cellulose, Veggie Capsule (Modified Cellulose), Rice Extract, and Rice Concentrate."
# ingredients_list_2 = "Microcrystalline Cellulose, Veggie Capsule (Modified Cellulose), Rice Extract, and Rice Concentrate."

X = [
    base_embedder(tf.constant([ingredients_list]))[0],
    source_value_embedder(tf.constant([ingredients_list]))[0],
    # base_embedder(tf.constant([ingredients_list]))[0],
    # source_value_embedder(tf.constant([ingredients_list]))[0],
    # base_embedder(tf.constant([ingredients_list_2]))[0],
    # source_value_embedder(tf.constant([ingredients_list_2]))[0],
    # base_embedder(tf.constant(["Other Ingredients: Gelatin  Rice Powder."]))[0],
    # base_embedder(tf.constant(["Gelatin, Rice Powder"]))[0],
    # base_embedder(tf.constant(["Other Ingredients: Gelatin  Rice Powder."]))[0],
    base_embedder(tf.constant(["All Natural Ingredients"]))[0],
    base_embedder(tf.constant(["Multiple Ingredients"]))[0],
    # base_embedder(tf.constant(["See Packaging"]))[0],
    # base_embedder(tf.constant(["See Label"]))[0],
    base_embedder(tf.constant(["Gelatin"]))[0],
    # source_value_embedder(tf.constant(["All Natural Ingredients"]))[0],
    # base_embedder(tf.constant(["(5-hydroxytryptophan) 100 mg"]))[0],
    # base_embedder(tf.constant(["Gelatin"]))[0],
    # base_embedder(tf.constant(["Silicon Dioxide"]))[0],
    # base_embedder(tf.constant(["Organic Spirulina"]))[0],
    base_embedder(tf.constant(["Griffonia Simplicifolia Extract"]))[0],
    # source_value_embedder(tf.constant(["Omega 3"]))[0],
    # base_embedder(tf.constant(["Relacore"]))[0],
]

labels = [
    "5-HTP 100 mg, Gelatin, Silicon Dioxide, ...",
    "5-HTP 100 mg, Gelatin, Silicon Dioxide, ... (*)",
    # "Enzyme, Fiber, Amino Acids ...",
    # "Enzyme, Fiber, Amino Acids ... (*)",
    # "5-HTP 100 mg, Microcrystalline ...",
    # "5-HTP 100 mg, Microcrystalline ... (*)",
    # "Other Ingredients: Gelatin, Rice Powder.",
    # "Gelatin, Rice Powder",
    "All Natural Ingredients",
    "Multiple Ingredients",
    # "See Packaging",
    # "See Label",
    "Gelatin",
    # "(5-hydroxytryptophan) 100 mg",
    # "Gelatin",
    # "Silicon Dioxide",
    # "Organic Spirulina",
    "Griffonia Simplicifolia Extract",
    # "Relacore",
]

X = numpy.array(X)
X = X.astype(numpy.float)

print(X.shape)

# X_embedded = TSNE(n_components=2).fit_transform(X)
X_embedded = PCA(n_components=2).fit_transform(X)
X_embedded.shape

# Invert X_embedded
# for i in range(len(X_embedded)):
#     X_embedded[i][0] = -1 * X_embedded[i][0]
__CELL_EDGE__(12)
# pyplot.title('PCA for Visualizing Embeddings')

'''
for i in range(len(X_embedded)):
    x, y = X_embedded[i]
    pyplot.scatter(x, y, marker="*", color="red")
    pyplot.text(x+0.03, y+0.03, labels[i], fontsize=9)
'''

# pyplot.title('2D PCA for Visualizing Embeddings')

'''
pyplot.scatter(X_embedded[0][0], X_embedded[0][1], marker="o", facecolors="none")
pyplot.scatter(X_embedded[1][0], X_embedded[1][1], marker="o")

pyplot.scatter(X_embedded[2][0], X_embedded[2][1], marker="o", facecolors="none")
pyplot.scatter(X_embedded[3][0], X_embedded[3][1], marker="o")
'''

label_offsets = [
    [0.03, -0.03],
    [-0.26, 0.06],
    [-0.47, 0.07],
    [-0.41, -0.1],
    [0.02, -0.07],
    [0.02, -0.07],
]

colors = [
    "blue",
    "blue",
    # "green",
    # "green",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
]

for i in range(2):
    x, y = X_embedded[i]
    if i % 2 is 0:
        pyplot.scatter(x, y, marker="o", facecolors="none", edgecolors=colors[i])
    else:
        pyplot.scatter(x, y, marker="o", color=colors[i])
        
        prev_x, prev_y = X_embedded[i-1]
        dx = x - prev_x
        dy = y - prev_y
        magnitude = math.sqrt(dx*dx + dy*dy)
        
        bx = prev_x + 0.01 * dx / magnitude
        by = prev_y + 0.01 * dy / magnitude
        
        pyplot.arrow(bx, by, dx, dy, head_width=0.03, length_includes_head=True, edgecolor=colors[i], facecolor="none")
        
    if i is 4 or i is 5:
        pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontproperties=fprop, fontsize=11, color=colors[i])
    else:
        pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontsize=11, color=colors[i])

for i in range(len(X_embedded) - 2):
    i += 2
    x, y = X_embedded[i]
    pyplot.scatter(x, y, marker="*", color=colors[i], s=100)
    pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontsize=11, color=colors[i])

pyplot.show()
__CELL_EDGE__(13)
query = "10 v"
query_2 = "10 lbs"

X = [
    base_embedder(tf.constant([query]))[0],
    source_key_embedder(tf.constant([query]))[0],
    base_embedder(tf.constant([query_2]))[0],
    source_key_embedder(tf.constant([query_2]))[0],
    # base_embedder(tf.constant([ingredients_list]))[0],
    # source_value_embedder(tf.constant([ingredients_list]))[0],
    # base_embedder(tf.constant([ingredients_list_2]))[0],
    # source_value_embedder(tf.constant([ingredients_list_2]))[0],
    # base_embedder(tf.constant(["Other Ingredients: Gelatin  Rice Powder."]))[0],
    # base_embedder(tf.constant(["Gelatin, Rice Powder"]))[0],
    # base_embedder(tf.constant(["Other Ingredients: Gelatin  Rice Powder."]))[0],
    base_embedder(tf.constant(["Ten Volts"]))[0],
    base_embedder(tf.constant(["Ten Pounds"]))[0],
    base_embedder(tf.constant(["Ten Amperes"]))[0],
    base_embedder(tf.constant(["Ten Inches"]))[0],
    # base_embedder(tf.constant(["Color"]))[0],
    # base_embedder(tf.constant(["Material"]))[0],
    # base_embedder(tf.constant(["N/A"]))[0],
    # base_embedder(tf.constant(["See Packaging"]))[0],
    # base_embedder(tf.constant(["See Label"]))[0],
    # base_embedder(tf.constant(["Gelatin"]))[0],
    # source_value_embedder(tf.constant(["All Natural Ingredients"]))[0],
    # base_embedder(tf.constant(["(5-hydroxytryptophan) 100 mg"]))[0],
    # base_embedder(tf.constant(["Gelatin"]))[0],
    # base_embedder(tf.constant(["Silicon Dioxide"]))[0],
    # base_embedder(tf.constant(["Organic Spirulina"]))[0],
    # base_embedder(tf.constant(["Griffonia Simplicifolia Extract"]))[0],
    # source_value_embedder(tf.constant(["Omega 3"]))[0],
    # base_embedder(tf.constant(["Relacore"]))[0],
]

labels = [
    "10 v",
    "10 v (*)",
    "10 lbs",
    "10 lbs (*)",
    # "Enzyme, Fiber, Amino Acids ...",
    # "Enzyme, Fiber, Amino Acids ... (*)",
    # "5-HTP 100 mg, Microcrystalline ...",
    # "5-HTP 100 mg, Microcrystalline ... (*)",
    # "Other Ingredients: Gelatin, Rice Powder.",
    # "Gelatin, Rice Powder",
    "Ten Volts",
    "Ten Pounds",
    "Ten Amperes",
    "Ten Inches",
    # "Color",
    # "Material",
    # "See Packaging",
    # "See Reviews",
    # "N/A",
    # "Gelatin",
    # "(5-hydroxytryptophan) 100 mg",
    # "Gelatin",
    # "Silicon Dioxide",
    # "Organic Spirulina",
    # "Griffonia Simplicifolia Extract",
    # "Relacore",
]

X = numpy.array(X)
X = X.astype(numpy.float)

print(X.shape)

# X_embedded = TSNE(n_components=2).fit_transform(X)
X_embedded = PCA(n_components=2).fit_transform(X)
X_embedded.shape

# Invert X_embedded
# for i in range(len(X_embedded)):
#     X_embedded[i][0] = -1 * X_embedded[i][0]
__CELL_EDGE__(14)
label_offsets = [
    [0.03, -0.03],
    [-0.26, 0.06],
    [-0.47, 0.07],
    [-0.41, -0.1],
    [0.02, -0.07],
    [0.02, -0.07],
    [0.02, -0.07],
    [0.02, -0.07],
    [0.02, -0.07],
    [0.02, -0.07],
]

colors = [
    "blue",
    "blue",
    "green",
    "green",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
    "red",
]

for i in range(4):
    x, y = X_embedded[i]
    if i % 2 is 0:
        pyplot.scatter(x, y, marker="o", facecolors="none", edgecolors=colors[i])
    else:
        pyplot.scatter(x, y, marker="o", color=colors[i])
        
        prev_x, prev_y = X_embedded[i-1]
        dx = x - prev_x
        dy = y - prev_y
        magnitude = math.sqrt(dx*dx + dy*dy)
        
        bx = prev_x + 0.01 * dx / magnitude
        by = prev_y + 0.01 * dy / magnitude
        
        pyplot.arrow(bx, by, dx, dy, head_width=0.03, length_includes_head=True, edgecolor=colors[i], facecolor="none")
        
    if i is 4 or i is 5:
        pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontproperties=fprop, fontsize=11, color=colors[i])
    else:
        pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontsize=11, color=colors[i])

for i in range(len(X_embedded) - 4):
    i += 4
    x, y = X_embedded[i]
    pyplot.scatter(x, y, marker="*", color=colors[i], s=100)
    pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontsize=11, color=colors[i])

pyplot.show()
__CELL_EDGE__(15)
query = "gender"

X = [
    base_embedder(tf.constant([query]))[0],
    source_key_embedder(tf.constant([query]))[0],
    # base_embedder(tf.constant([query_2]))[0],
    # source_key_embedder(tf.constant([query_2]))[0],
    # base_embedder(tf.constant([ingredients_list]))[0],
    # source_value_embedder(tf.constant([ingredients_list]))[0],
    # base_embedder(tf.constant([ingredients_list_2]))[0],
    # source_value_embedder(tf.constant([ingredients_list_2]))[0],
    # base_embedder(tf.constant(["Other Ingredients: Gelatin  Rice Powder."]))[0],
    # base_embedder(tf.constant(["Gelatin, Rice Powder"]))[0],
    # base_embedder(tf.constant(["Other Ingredients: Gelatin  Rice Powder."]))[0],
    # base_embedder(tf.constant(["sex"]))[0],
    # base_embedder(tf.constant(["man"]))[0],
    base_embedder(tf.constant(["female"]))[0],
    base_embedder(tf.constant(["non-binary"]))[0],
    base_embedder(tf.constant(["target gender"]))[0],
    base_embedder(tf.constant(["target audience"]))[0],
    # base_embedder(tf.constant(["Ten Inches"]))[0],
    # base_embedder(tf.constant(["item dimensions"]))[0],
    base_embedder(tf.constant(["material"]))[0],
    base_embedder(tf.constant(["color"]))[0],
    # base_embedder(tf.constant(["N/A"]))[0],
    # base_embedder(tf.constant(["See Packaging"]))[0],
    # base_embedder(tf.constant(["See Label"]))[0],
    # base_embedder(tf.constant(["Gelatin"]))[0],
    # source_value_embedder(tf.constant(["All Natural Ingredients"]))[0],
    # base_embedder(tf.constant(["(5-hydroxytryptophan) 100 mg"]))[0],
    # base_embedder(tf.constant(["Gelatin"]))[0],
    # base_embedder(tf.constant(["Silicon Dioxide"]))[0],
    # base_embedder(tf.constant(["Organic Spirulina"]))[0],
    # base_embedder(tf.constant(["Griffonia Simplicifolia Extract"]))[0],
    # source_value_embedder(tf.constant(["Omega 3"]))[0],
    # base_embedder(tf.constant(["Relacore"]))[0],
]

labels = [
    "gender",
    "gender (*)",
    # "10 lbs",
    # "10 lbs (*)",
    # "Enzyme, Fiber, Amino Acids ...",
    # "Enzyme, Fiber, Amino Acids ... (*)",
    # "5-HTP 100 mg, Microcrystalline ...",
    # "5-HTP 100 mg, Microcrystalline ... (*)",
    # "Other Ingredients: Gelatin, Rice Powder.",
    # "Gelatin, Rice Powder",
    # "sex",
    # "man",
    "female",
    "non-binary",
    # "Ten Inches",
    # "item dimensions",
    "target gender",
    "target audience",
    "material",
    "color",
    # "See Packaging",
    # "See Reviews",
    # "N/A",
    # "Gelatin",
    # "(5-hydroxytryptophan) 100 mg",
    # "Gelatin",
    # "Silicon Dioxide",
    # "Organic Spirulina",
    # "Griffonia Simplicifolia Extract",
    # "Relacore",
]

X = numpy.array(X)
X = X.astype(numpy.float)

print(X.shape)

# X_embedded = TSNE(n_components=2).fit_transform(X)
X_embedded = PCA(n_components=2).fit_transform(X)
X_embedded.shape

# Invert X_embedded
# for i in range(len(X_embedded)):
#     X_embedded[i][0] = -1 * X_embedded[i][0]
__CELL_EDGE__(16)
label_offsets = [
    [-0.03, 0.07],
    [-0.26, 0.06],
    [0.02, -0.08],
    [-0.03, 0.1],
    [0.03, -0.08],
    [0.03, -0.08],
    [0.02, 0.05],
    [0.02, -0.07],
]

colors = [
    "blue",
    "blue",
    # "green",
    # "green",
    # "black",
    "black",
    "black",
    # "black",
    "red",
    "red",
    "black",
    "black",
    # "red",
]

for i in range(2):
    x, y = X_embedded[i]
    if i % 2 is 0:
        pyplot.scatter(x, y, marker="o", facecolors="none", edgecolors=colors[i])
    else:
        pyplot.scatter(x, y, marker="o", color=colors[i])
        
        prev_x, prev_y = X_embedded[i-1]
        dx = x - prev_x
        dy = y - prev_y
        magnitude = math.sqrt(dx*dx + dy*dy)
        
        bx = prev_x + 0.01 * dx / magnitude
        by = prev_y + 0.01 * dy / magnitude
        
        pyplot.arrow(bx, by, dx, dy, head_width=0.03, length_includes_head=True, edgecolor=colors[i], facecolor="none")
        
    if i is 4 or i is 5:
        pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontproperties=fprop, fontsize=11, color=colors[i])
    else:
        pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontsize=11, color=colors[i])

for i in range(2):
    i += 2
    x, y = X_embedded[i]
    pyplot.scatter(x, y, marker="o", facecolors="none", edgecolors=colors[i])
    pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontsize=11, color=colors[i])
        
for i in range(2):
    i += 4
    x, y = X_embedded[i]
    pyplot.scatter(x, y, marker="*", color=colors[i], s=100)
    pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontsize=11, color=colors[i])
    
for i in range(2):
    i += 6
    x, y = X_embedded[i]
    pyplot.scatter(x, y, marker="*", color=colors[i])
    pyplot.text(x + label_offsets[i][0], y + label_offsets[i][1], labels[i], fontsize=11, color=colors[i])

pyplot.show()
__CELL_EDGE__(17)

__CELL_EDGE__(18)

