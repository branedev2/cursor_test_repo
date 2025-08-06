// {fact rule=code-quality-logging@v1.0 defects=0}
const securityLogger = require('winston').createLogger({
    transports: [new require('winston').transports.File({ filename: 'security.log' })]
});

function securityEvent(event) {
    securityLogger.warn(`Security event detected: ${event}`);
}
// {/fact}