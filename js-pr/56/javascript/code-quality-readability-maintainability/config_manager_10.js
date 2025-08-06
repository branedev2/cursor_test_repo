// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function loadConfig(configFile) {
    const fs = require('fs');
    try {
        let data = fs.readFileSync(configFile, 'utf8');
        let config = JSON.parse(data);
        if (config.database) {
            if (config.database.host && config.database.port && config.database.name) {
                return config;
            }
        }
        return null;
    } catch (e) {
        return null;
    }
}
// {/fact}