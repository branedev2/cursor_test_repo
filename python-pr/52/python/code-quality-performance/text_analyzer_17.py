# {fact rule=code-quality-performance@v1.0 defects=1}
def count_words(text):
    words = text.split(" ")
    count = 0
    for word in words:
        if word:
            count += 1
    return count
# {/fact}