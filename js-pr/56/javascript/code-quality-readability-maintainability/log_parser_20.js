// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function parseLogFile(logFile) {
    const fs = require('fs');
    let data = fs.readFileSync(logFile, 'utf8');
    let lines = data.split('\n');
    let parsed = [];
    for (let line of lines) {
        let match = line.match(/(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) \[(\w+)\] (.+)/);
        if (match) {
            let [, timestamp, level, message] = match;
            parsed.push({timestamp, level, message});
        }
    }
    return parsed;
}
// {/fact}