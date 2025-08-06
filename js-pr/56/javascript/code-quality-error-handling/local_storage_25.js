// {fact rule=code-quality-error-handling@v1.0 defects=1}
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
// {/fact}