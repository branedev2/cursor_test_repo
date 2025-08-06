// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function processMessage(message) {
    logger.info(`Message processed: ${message.length} characters`);
}
// {/fact}