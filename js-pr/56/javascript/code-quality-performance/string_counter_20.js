// {fact rule=code-quality-performance@v1.0 defects=1}
function countCharacters(text) {
    let counts = {};
    for (let char of text) {
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }
    return counts;
}
// {/fact}