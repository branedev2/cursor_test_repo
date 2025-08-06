// {fact rule=code-quality-error-handling@v1.0 defects=0}
function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('JSON parsing error:', error.message);
        return null;
    }
}
// {/fact}