// {fact rule=code-quality-error-handling@v1.0 defects=1}
function readConfig(configFile) {
    const fs = require('fs');
    const data = fs.readFileSync(configFile, 'utf8');
    return JSON.parse(data);
}
// {/fact}