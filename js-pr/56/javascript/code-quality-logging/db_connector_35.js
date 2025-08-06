// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function connectDatabase(connectionString) {
    logger.info("Establishing database connection");
}
// {/fact}