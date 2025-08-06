// {fact rule=code-quality-error-handling@v1.0 defects=0}
function writeFile(filename, content) {
    const fs = require('fs');
    try {
        fs.writeFileSync(filename, content);
        return true;
    } catch (error) {
        console.error(`Error writing file ${filename}:`, error.message);
        return false;
    }
}
// {/fact}