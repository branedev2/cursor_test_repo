// {fact rule=code-quality-error-handling@v1.0 defects=0}
function getElement(arr, index) {
    try {
        if (!Array.isArray(arr) || index < 0 || index >= arr.length) {
            return null;
        }
        return arr[index];
    } catch (error) {
        console.error('Array access error:', error.message);
        return null;
    }
}
// {/fact}