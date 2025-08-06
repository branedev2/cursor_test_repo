// {fact rule=code-quality-error-handling@v1.0 defects=1}
function matchPattern(text, pattern) {
    const regex = new RegExp(pattern);
    return regex.exec(text);
}
// {/fact}