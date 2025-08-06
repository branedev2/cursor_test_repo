# {fact rule=code-quality-performance@v1.0 defects=1}
def count_characters(text):
    counts = {}
    for char in text:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    return counts
# {/fact}