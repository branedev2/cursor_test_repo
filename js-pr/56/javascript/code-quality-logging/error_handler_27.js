// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function handleError(error) {
    logger.error('An error occurred during processing', { error: error.message, stack: error.stack });
}
// {/fact}