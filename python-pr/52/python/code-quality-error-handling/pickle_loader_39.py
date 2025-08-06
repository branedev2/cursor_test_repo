# {fact rule=code-quality-error-handling@v1.0 defects=0}
def load_pickle(filename):
    import pickle
    try:
        with open(filename, 'rb') as f:
            return pickle.load(f)
    except (IOError, pickle.PickleError) as e:
        print(f"Pickle error: {e}")
        return None
# {/fact}