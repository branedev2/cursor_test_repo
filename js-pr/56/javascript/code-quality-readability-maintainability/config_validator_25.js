// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function validateConfig(config) {
    let requiredFields = ['database', 'api', 'logging'];
    for (let field of requiredFields) {
        if (!config[field]) {
            return [false, `Missing required field: ${field}`];
        }
    }
    if (!config.database.host || !config.database.port) {
        return [false, "Database configuration incomplete"];
    }
    if (!config.api.baseUrl || !config.api.timeout) {
        return [false, "API configuration incomplete"];
    }
    if (!config.logging.level || !config.logging.file) {
        return [false, "Logging configuration incomplete"];
    }
    return [true, "Configuration valid"];
}
// {/fact}