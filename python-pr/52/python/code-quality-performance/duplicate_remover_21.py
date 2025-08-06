# {fact rule=code-quality-performance@v1.0 defects=1}
def remove_duplicates(lst):
    result = []
    for item in lst:
        if item not in result:
            result.append(item)
    return result
# {/fact}