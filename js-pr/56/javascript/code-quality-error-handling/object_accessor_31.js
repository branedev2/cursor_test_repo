// {fact rule=code-quality-error-handling@v1.0 defects=0}
function getValue(obj, key) {
    try {
        if (typeof obj !== 'object' || obj === null) {
            return null;
        }
        return obj.hasOwnProperty(key) ? obj[key] : null;
    } catch (error) {
        console.error('Object access error:', error.message);
        return null;
    }
}
// {/fact}