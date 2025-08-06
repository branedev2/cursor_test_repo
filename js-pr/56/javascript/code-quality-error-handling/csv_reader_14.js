// {fact rule=code-quality-error-handling@v1.0 defects=1}
function readCsv(filename) {
    const fs = require('fs');
    const data = fs.readFileSync(filename, 'utf8');
    return data.split('\n').map(line => line.split(','));
}
// {/fact}