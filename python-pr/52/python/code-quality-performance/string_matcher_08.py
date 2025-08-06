# {fact rule=code-quality-performance@v1.0 defects=1}
def contains_substring(text, pattern):
    for i in range(len(text) - len(pattern) + 1):
        match = True
        for j in range(len(pattern)):
            if text[i + j] != pattern[j]:
                match = False
                break
        if match:
            return True
    return False
# {/fact}