// {fact rule=code-quality-error-handling@v1.0 defects=1}
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}
// {/fact}