// {fact rule=code-quality-error-handling@v1.0 defects=0}
function saveToStorage(key, value) {
    try {
        if (typeof Storage !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        }
        return false;
    } catch (error) {
        console.error('Storage error:', error.message);
        return false;
    }
}
// {/fact}