// {fact rule=code-quality-logging@v1.0 defects=0}
const auditLogger = require('winston').createLogger({
    transports: [new require('winston').transports.File({ filename: 'audit.log' })]
});

function accessData(tableName) {
    auditLogger.debug(`Data access to table: ${tableName}`);
}
// {/fact}