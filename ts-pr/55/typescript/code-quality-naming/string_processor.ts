class StringProcessor {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    proc(str: string): string {
        return str.toUpperCase();
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    convertToUpperCase(inputString: string): string {
        return inputString.toUpperCase();
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    chk(s1: string, s2: string): boolean {
        return s1.includes(s2);
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    containsSubstring(mainString: string, searchString: string): boolean {
        return mainString.includes(searchString);
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    cnt(txt: string, ch: string): number {
        let c = 0;
        for (let x of txt) {
            if (x === ch) {
                c++;
            }
        }
        return c;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    countCharacterOccurrences(text: string, character: string): number {
        let count = 0;
        for (let currentChar of text) {
            if (currentChar === character) {
                count++;
            }
        }
        return count;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    spl(str: string, sep: string): string[] {
        return str.split(sep);
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    splitStringBySeparator(inputString: string, separator: string): string[] {
        return inputString.split(separator);
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    trm(s: string): string {
        return s.trim();
    }
    // {/fact}
}

const processor = new StringProcessor();
const result = processor.proc('hello world');
console.log(result);