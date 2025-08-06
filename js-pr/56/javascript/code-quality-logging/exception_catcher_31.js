// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function riskyOperation() {
    try {
        dangerousFunction();
    } catch (error) {
        logger.error('Operation failed', { error: error.message });
        throw error;
    }
}
// {/fact}