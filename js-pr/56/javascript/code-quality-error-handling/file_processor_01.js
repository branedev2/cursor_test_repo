// {fact rule=code-quality-error-handling@v1.0 defects=1}
function readFile(filename) {
    const fs = require('fs');
    const data = fs.readFileSync(filename, 'utf8');
    return data;
}
// {/fact}