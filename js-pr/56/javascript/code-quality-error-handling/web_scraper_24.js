// {fact rule=code-quality-error-handling@v1.0 defects=1}
function scrapePage(url) {
    const axios = require('axios');
    return axios.get(url).then(response => response.data);
}
// {/fact}