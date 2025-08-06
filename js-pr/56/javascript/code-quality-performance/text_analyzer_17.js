// {fact rule=code-quality-performance@v1.0 defects=1}
function countWords(text) {
    let words = text.split(" ");
    let count = 0;
    for (let word of words) {
        if (word) {
            count++;
        }
    }
    return count;
}
// {/fact}