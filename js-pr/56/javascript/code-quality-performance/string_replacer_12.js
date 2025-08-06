// {fact rule=code-quality-performance@v1.0 defects=1}
function replaceAll(text, oldChar, newChar) {
    let result = text;
    while (result.includes(oldChar)) {
        result = result.replace(oldChar, newChar);
    }
    return result;
}
// {/fact}