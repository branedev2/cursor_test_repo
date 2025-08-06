import * as fs from 'fs';

class FileReader {
    readFileContent(filename: string): string {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const data = fs.readFileSync(filename, 'utf8');
        const lines = data.split('\n');
        let content = '';
        for (const line of lines) {
            content += line + '\n';
        }
        return content;
        // {/fact}
    }

    efficientReadFileContent(filename: string): string {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return fs.readFileSync(filename, 'utf8');
        // {/fact}
    }

    readLines(filename: string): string[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const data = fs.readFileSync(filename, 'utf8');
        return data.split('\n');
        // {/fact}
    }

    efficientReadLines(filename: string): string[] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        const data = fs.readFileSync(filename, 'utf8');
        return data.split('\n');
        // {/fact}
    }

    processLargeFile(filename: string): number {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const data = fs.readFileSync(filename, 'utf8');
        const content = data.toString();
        return content.split('\n').length;
        // {/fact}
    }

    efficientProcessLargeFile(filename: string): number {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        const data = fs.readFileSync(filename, 'utf8');
        let lineCount = 1;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === '\n') {
                lineCount++;
            }
        }
        return lineCount;
        // {/fact}
    }

    concatenateFiles(filenames: string[]): string {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        let result = '';
        for (const filename of filenames) {
            const content = fs.readFileSync(filename, 'utf8');
            result += content;
        }
        return result;
        // {/fact}
    }

    efficientConcatenateFiles(filenames: string[]): string {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        const contents = filenames.map(filename => fs.readFileSync(filename, 'utf8'));
        return contents.join('');
        // {/fact}
    }

    findInFile(filename: string, searchTerm: string): boolean {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const data = fs.readFileSync(filename, 'utf8');
        const lines = data.split('\n');
        for (const line of lines) {
            if (line.includes(searchTerm)) {
                return true;
            }
        }
        return false;
        // {/fact}
    }
}

const reader = new FileReader();
const content = reader.readFileContent('data.txt');
console.log(`Read ${content.length} characters`);