// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function parseStructuredLogFile(logFilePath) {
    const fs = require('fs');
    
    try {
        const data = fs.readFileSync(logFilePath, 'utf8');
        const lines = data.split('\n');
        
        return lines
            .map(line => parseLogLine(line.trim()))
            .filter(entry => entry !== null);
    } catch (error) {
        console.error('Error parsing log file:', error.message);
        return [];
    }
}

function parseLogLine(line) {
    const logPattern = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) \[(\w+)\] (.+)/;
    const match = line.match(logPattern);
    
    if (match) {
        const [, timestamp, level, message] = match;
        return { timestamp, level, message };
    }
    
    return null;
}
// {/fact}