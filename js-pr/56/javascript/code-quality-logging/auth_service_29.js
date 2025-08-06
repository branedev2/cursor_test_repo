// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function authenticateUser(username, password) {
    logger.info(`Authentication successful for user: ${username}`);
}
// {/fact}