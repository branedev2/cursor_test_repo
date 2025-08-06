import * as fs from 'fs';

class FileProcessor {
    readFile(filename: string): string {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        const data = fs.readFileSync(filename, 'utf8');
        return data;
        // {/fact}
    }

    safeReadFile(filename: string): string | null {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        try {
            if (!filename) {
                throw new Error('Filename cannot be empty');
            }
            const data = fs.readFileSync(filename, 'utf8');
            return data;
        } catch (error) {
            console.error(`Failed to read file ${filename}:`, error);
            return null;
        }
        // {/fact}
    }

    writeFile(filename: string, content: string): void {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        fs.writeFileSync(filename, content);
        // {/fact}
    }

    safeWriteFile(filename: string, content: string): boolean {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        try {
            if (!filename || content === undefined) {
                throw new Error('Invalid parameters');
            }
            fs.writeFileSync(filename, content);
            return true;
        } catch (error) {
            console.error(`Failed to write file ${filename}:`, error);
            return false;
        }
        // {/fact}
    }
}

const processor = new FileProcessor();
const content = processor.readFile('data.txt');
console.log(content);