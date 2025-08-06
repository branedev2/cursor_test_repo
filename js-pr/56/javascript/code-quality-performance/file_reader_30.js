// {fact rule=code-quality-performance@v1.0 defects=0}
function readFile(filename) {
    const fs = require('fs');
    return fs.readFileSync(filename, 'utf8');
}
// {/fact}