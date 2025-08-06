// {fact rule=code-quality-error-handling@v1.0 defects=1}
function writeFile(filename, content) {
    const fs = require('fs');
    fs.writeFileSync(filename, content);
}
// {/fact}