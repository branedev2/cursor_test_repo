# {fact rule=code-quality-performance@v1.0 defects=1}
def arrays_equal(arr1, arr2):
    if len(arr1) != len(arr2):
        return False
    for i in range(len(arr1)):
        if arr1[i] != arr2[i]:
            return False
    return True
# {/fact}