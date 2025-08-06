// {fact rule=code-quality-logging@v1.0 defects=0}
const businessLogger = require('winston').createLogger({
    transports: [new require('winston').transports.File({ filename: 'business.log' })]
});

function businessOperation() {
    businessLogger.info("Business operation executed successfully");
}
// {/fact}