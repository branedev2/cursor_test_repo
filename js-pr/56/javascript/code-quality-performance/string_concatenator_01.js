// {fact rule=code-quality-performance@v1.0 defects=1}
function buildString(parts) {
    let result = "";
    for (let part of parts) {
        result += part;
    }
    return result;
}
// {/fact}