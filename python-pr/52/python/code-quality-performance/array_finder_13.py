# {fact rule=code-quality-performance@v1.0 defects=1}
def find_max(array):
    max_val = array[0]
    for i in range(1, len(array)):
        if array[i] > max_val:
            max_val = array[i]
    return max_val
# {/fact}