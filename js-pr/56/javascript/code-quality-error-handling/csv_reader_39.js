// {fact rule=code-quality-error-handling@v1.0 defects=0}
function readCsv(filename) {
    const fs = require('fs');
    try {
        const data = fs.readFileSync(filename, 'utf8');
        return data.split('\n').map(line => line.split(','));
    } catch (error) {
        console.error('CSV reading error:', error.message);
        return null;
    }
}
// {/fact}