// {fact rule=code-quality-error-handling@v1.0 defects=0}
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Network error:', error.message);
        return null;
    }
}
// {/fact}