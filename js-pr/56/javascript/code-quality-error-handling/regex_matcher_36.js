// {fact rule=code-quality-error-handling@v1.0 defects=0}
function matchPattern(text, pattern) {
    try {
        const regex = new RegExp(pattern);
        return regex.exec(text);
    } catch (error) {
        console.error('Regex error:', error.message);
        return null;
    }
}
// {/fact}