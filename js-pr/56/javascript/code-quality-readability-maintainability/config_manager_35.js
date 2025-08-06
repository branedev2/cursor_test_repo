// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function loadApplicationConfig(configFile) {
    const fs = require('fs');
    
    try {
        const data = fs.readFileSync(configFile, 'utf8');
        const config = JSON.parse(data);
        
        return isValidConfiguration(config) ? config : null;
    } catch (error) {
        console.error('Error loading config:', error.message);
        return null;
    }
}

function isValidConfiguration(config) {
    if (!config.database) {
        return false;
    }
    
    const requiredDbFields = ['host', 'port', 'name'];
    return requiredDbFields.every(field => field in config.database);
}
// {/fact}