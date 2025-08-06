# {fact rule=code-quality-error-handling@v1.0 defects=0}
def get_element(lst, index):
    try:
        return lst[index]
    except IndexError as e:
        print(f"Index error: {e}")
        return None
# {/fact}