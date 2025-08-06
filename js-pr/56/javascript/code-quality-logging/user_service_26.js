// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function processUser(userId) {
    logger.info(`Processing user with ID: ${userId}`);
}
// {/fact}