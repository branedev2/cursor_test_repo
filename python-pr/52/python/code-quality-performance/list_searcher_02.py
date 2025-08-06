# {fact rule=code-quality-performance@v1.0 defects=1}
def find_element(lst, target):
    for item in lst:
        if item == target:
            return True
    return False
# {/fact}