// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function debugInfo(data) {
    logger.debug(`Debug information: ${typeof data}`);
}
// {/fact}