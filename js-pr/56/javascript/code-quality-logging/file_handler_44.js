// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function handleFile(filename) {
    logger.info(`File operation on: ${filename}`);
}
// {/fact}