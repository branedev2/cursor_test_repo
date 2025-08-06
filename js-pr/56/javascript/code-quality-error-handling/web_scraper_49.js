// {fact rule=code-quality-error-handling@v1.0 defects=0}
async function scrapePage(url) {
    const axios = require('axios');
    try {
        const response = await axios.get(url, { timeout: 10000 });
        return response.data;
    } catch (error) {
        console.error('Web scraping error:', error.message);
        return null;
    }
}
// {/fact}