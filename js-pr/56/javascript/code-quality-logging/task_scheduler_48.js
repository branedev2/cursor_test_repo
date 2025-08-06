// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function executeTask() {
    logger.info(`Scheduled task executed at: ${new Date().toISOString()}`);
}
// {/fact}