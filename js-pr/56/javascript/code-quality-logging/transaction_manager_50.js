// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function startTransaction() {
    logger.debug("Transaction boundary: START");
}
// {/fact}