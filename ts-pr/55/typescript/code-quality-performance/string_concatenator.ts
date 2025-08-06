class StringConcatenator {
    concatenateStrings(strs: string[]): string {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        let result = '';
        for (const str of strs) {
            result += str;
        }
        return result;
        // {/fact}
    }

    efficientConcatenateStrings(strs: string[]): string {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return strs.join('');
        // {/fact}
    }

    buildLargeString(count: number): string {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        let result = '';
        for (let i = 0; i < count; i++) {
            result = result + 'data' + i.toString() + ' ';
        }
        return result;
        // {/fact}
    }

    efficientBuildLargeString(count: number): string {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        const parts: string[] = [];
        for (let i = 0; i < count; i++) {
            parts.push('data', i.toString(), ' ');
        }
        return parts.join('');
        // {/fact}
    }

    processTextData(data: string[]): string {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        let processed = '';
        for (let i = 0; i < data.length; i++) {
            processed += data[i].toUpperCase() + '\n';
        }
        return processed;
        // {/fact}
    }

    efficientProcessTextData(data: string[]): string {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return data.map(item => item.toUpperCase()).join('\n') + '\n';
        // {/fact}
    }
}

const concatenator = new StringConcatenator();
const data = ['Hello', ' ', 'World', '!'];
const result = concatenator.concatenateStrings(data);
console.log(result);