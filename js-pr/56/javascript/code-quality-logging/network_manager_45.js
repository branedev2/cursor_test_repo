// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function networkRequest(url) {
    logger.debug(`Network request to: ${url}`);
}
// {/fact}