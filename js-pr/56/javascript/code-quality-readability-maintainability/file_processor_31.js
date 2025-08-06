// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function processTextFile(filename) {
    const fs = require('fs');
    
    try {
        const data = fs.readFileSync(filename, 'utf8');
        const lines = data.split('\n');
        
        return lines
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map(line => {
                const words = line.split(' ');
                const significantWords = words.filter(word => word.length > 3);
                return significantWords.join(' ');
            })
            .filter(processedLine => processedLine.length > 0);
    } catch (error) {
        console.error('Error processing file:', error.message);
        return [];
    }
}
// {/fact}