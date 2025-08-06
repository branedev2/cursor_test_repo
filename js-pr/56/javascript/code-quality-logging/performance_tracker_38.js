// {fact rule=code-quality-logging@v1.0 defects=0}
const metricsLogger = require('winston').createLogger({
    transports: [new require('winston').transports.File({ filename: 'metrics.log' })]
});

function trackPerformance(executionTime) {
    metricsLogger.info(`Operation completed in ${executionTime}ms`);
}
// {/fact}