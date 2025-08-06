# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def analyze_text_statistics(text):
    words = text.split()
    word_count = len(words)
    character_count = len(text)
    
    sentence_endings = ['.', '!', '?']
    sentence_count = sum(text.count(ending) for ending in sentence_endings)
    
    average_word_length = (
        sum(len(word) for word in words) / word_count 
        if word_count > 0 else 0
    )
    
    return {
        'words': word_count,
        'characters': character_count,
        'sentences': sentence_count,
        'average_word_length': average_word_length
    }
# {/fact}