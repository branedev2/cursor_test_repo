// {fact rule=code-quality-performance@v1.0 defects=1}
function readFile(filename) {
    const fs = require('fs');
    let content = "";
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.split('\n');
    for (let line of lines) {
        content += line + "\n";
    }
    return content;
}
// {/fact}