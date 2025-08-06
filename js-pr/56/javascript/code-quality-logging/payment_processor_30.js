// {fact rule=code-quality-logging@v1.0 defects=0}
const logger = require('winston');

function processPayment(cardNumber, cvv) {
    const maskedCard = cardNumber.slice(-4).padStart(cardNumber.length, '*');
    logger.info(`Processing payment for card: ${maskedCard}`);
}
// {/fact}