// {fact rule=code-quality-performance@v1.0 defects=0}
function countWords(text) {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
}
// {/fact}