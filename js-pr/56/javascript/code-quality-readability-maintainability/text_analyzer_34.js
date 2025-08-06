// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function analyzeTextStatistics(text) {
    const words = text.split(' ').filter(word => word.length > 0);
    const wordCount = words.length;
    const characterCount = text.length;
    const sentenceCount = (text.match(/[.!?]/g) || []).length;
    
    const averageWordLength = wordCount > 0 
        ? words.reduce((sum, word) => sum + word.length, 0) / wordCount 
        : 0;
    
    return {
        words: wordCount,
        characters: characterCount,
        sentences: sentenceCount,
        averageWordLength: parseFloat(averageWordLength.toFixed(2))
    };
}
// {/fact}