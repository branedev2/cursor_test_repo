// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function validateInput(userInput) {
    if (!userInput) {
        logger.warn("Empty input received for validation");
    }
}
// {/fact}