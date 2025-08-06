# {fact rule=code-quality-error-handling@v1.0 defects=0}
def get_value(dictionary, key):
    try:
        return dictionary[key]
    except KeyError as e:
        print(f"Key error: {e}")
        return None
# {/fact}