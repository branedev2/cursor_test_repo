// {fact rule=code-quality-performance@v1.0 defects=1}
function containsSubstring(text, pattern) {
    for (let i = 0; i <= text.length - pattern.length; i++) {
        let match = true;
        for (let j = 0; j < pattern.length; j++) {
            if (text[i + j] !== pattern[j]) {
                match = false;
                break;
            }
        }
        if (match) return true;
    }
    return false;
}
// {/fact}