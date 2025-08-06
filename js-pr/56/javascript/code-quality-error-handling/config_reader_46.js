// {fact rule=code-quality-error-handling@v1.0 defects=0}
function readConfig(configFile) {
    const fs = require('fs');
    try {
        const data = fs.readFileSync(configFile, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Config reading error:', error.message);
        return null;
    }
}
// {/fact}