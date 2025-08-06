import * as fs from 'fs';

class FileOperations {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    rd(f: string): string | null {
        try {
            const c = fs.readFileSync(f, 'utf8');
            return c;
        } catch {
            return null;
        }
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    readFileContent(filename: string): string | null {
        try {
            const content = fs.readFileSync(filename, 'utf8');
            return content;
        } catch {
            return null;
        }
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    wr(f: string, d: string): boolean {
        try {
            fs.writeFileSync(f, d);
            return true;
        } catch {
            return false;
        }
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    writeDataToFile(filename: string, data: string): boolean {
        try {
            fs.writeFileSync(filename, data);
            return true;
        } catch {
            return false;
        }
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    ex(p: string): boolean {
        try {
            fs.accessSync(p);
            return true;
        } catch {
            return false;
        }
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    fileExists(path: string): boolean {
        try {
            fs.accessSync(path);
            return true;
        } catch {
            return false;
        }
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    sz(f: string): number {
        try {
            const st = fs.statSync(f);
            return st.size;
        } catch {
            return -1;
        }
    }
    // {/fact}
}

const ops = new FileOperations();
const content = ops.rd('test.txt');
if (content) {
    console.log(content);
}