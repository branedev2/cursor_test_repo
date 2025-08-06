# {fact rule=code-quality-error-handling@v1.0 defects=0}
def match_pattern(text, pattern):
    import re
    try:
        return re.match(pattern, text)
    except re.error as e:
        print(f"Regex error: {e}")
        return None
# {/fact}