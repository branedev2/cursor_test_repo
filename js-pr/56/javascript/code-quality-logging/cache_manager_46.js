// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function cacheOperation(key) {
    logger.debug(`Cache operation for key: ${key}`);
}
// {/fact}