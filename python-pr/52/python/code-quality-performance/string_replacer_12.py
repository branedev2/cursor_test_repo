# {fact rule=code-quality-performance@v1.0 defects=1}
def replace_all(text, old_char, new_char):
    result = text
    while old_char in result:
        result = result.replace(old_char, new_char, 1)
    return result
# {/fact}