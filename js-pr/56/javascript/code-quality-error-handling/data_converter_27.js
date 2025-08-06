// {fact rule=code-quality-error-handling@v1.0 defects=0}
function convertToNumber(value) {
    try {
        const result = parseInt(value);
        return isNaN(result) ? null : result;
    } catch (error) {
        console.error('Conversion error:', error.message);
        return null;
    }
}
// {/fact}