# {fact rule=code-quality-error-handling@v1.0 defects=1}
def load_pickle(filename):
    import pickle
    f = open(filename, 'rb')
    data = pickle.load(f)
    f.close()
    return data
# {/fact}