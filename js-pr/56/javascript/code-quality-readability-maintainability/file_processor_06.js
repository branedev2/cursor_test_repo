// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function processFile(f) {
    const fs = require('fs');
    try {
        let data = fs.readFileSync(f, 'utf8');
        let lines = data.split('\n');
        let processed = [];
        for (let line of lines) {
            if (line.trim()) {
                let words = line.split(' ');
                let filteredWords = words.filter(w => w.length > 3);
                if (filteredWords.length > 0) {
                    processed.push(filteredWords.join(' '));
                }
            }
        }
        return processed;
    } catch (e) {
        return [];
    }
}
// {/fact}