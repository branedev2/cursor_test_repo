# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def analyze_text(text):
    words = text.split()
    word_count = len(words)
    char_count = len(text)
    sentence_count = text.count('.') + text.count('!') + text.count('?')
    avg_word_length = sum(len(word) for word in words) / len(words) if words else 0
    return {'words': word_count, 'chars': char_count, 'sentences': sentence_count, 'avg_word_len': avg_word_length}
# {/fact}