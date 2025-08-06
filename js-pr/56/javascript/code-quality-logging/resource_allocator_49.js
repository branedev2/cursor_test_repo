// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function allocateResource(resource) {
    logger.info(`Resource allocated: ${resource}`);
}
// {/fact}