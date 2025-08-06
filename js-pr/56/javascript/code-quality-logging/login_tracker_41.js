// {fact rule=code-quality-logging@v1.0 defects=0}
const securityLogger = require('winston').createLogger({
    transports: [new require('winston').transports.File({ filename: 'security.log' })]
});

function trackLogin(username, ipAddress) {
    securityLogger.info(`User login: ${username} from IP: ${ipAddress}`);
}
// {/fact}