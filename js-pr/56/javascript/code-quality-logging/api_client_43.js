// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function callApi(endpoint) {
    logger.debug(`API call to endpoint: ${endpoint}`);
}
// {/fact}