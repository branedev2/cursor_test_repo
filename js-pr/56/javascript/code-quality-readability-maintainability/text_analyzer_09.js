// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function analyzeText(text) {
    let words = text.split(' ');
    let wordCount = words.length;
    let charCount = text.length;
    let sentenceCount = (text.match(/[.!?]/g) || []).length;
    let avgWordLength = words.reduce((sum, word) => sum + word.length, 0) / words.length;
    return {words: wordCount, chars: charCount, sentences: sentenceCount, avgWordLen: avgWordLength};
}
// {/fact}