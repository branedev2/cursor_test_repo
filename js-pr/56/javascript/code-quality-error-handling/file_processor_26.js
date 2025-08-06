// {fact rule=code-quality-error-handling@v1.0 defects=0}
function readFile(filename) {
    const fs = require('fs');
    try {
        return fs.readFileSync(filename, 'utf8');
    } catch (error) {
        console.error(`Error reading file ${filename}:`, error.message);
        return null;
    }
}
// {/fact}