// {fact rule=code-quality-performance@v1.0 defects=0}
function countCharacters(text) {
    return [...text].reduce((counts, char) => {
        counts[char] = (counts[char] || 0) + 1;
        return counts;
    }, {});
}
// {/fact}