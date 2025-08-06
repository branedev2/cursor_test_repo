class ArrayProcessor {
    processData(input: number[]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const result: number[] = [];
        for (const value of input) {
            if (value > 0) {
                result.push(value * 2);
            }
        }
        return result;
        // {/fact}
    }

    efficientProcessData(input: number[]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return input.filter(value => value > 0).map(value => value * 2);
        // {/fact}
    }

    containsValue(data: number[], target: number): boolean {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (let i = 0; i < data.length; i++) {
            if (data[i] === target) {
                return true;
            }
        }
        return false;
        // {/fact}
    }

    efficientContainsValue(data: number[], target: number): boolean {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return data.includes(target);
        // {/fact}
    }

    removeDuplicates(data: number[]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const result: number[] = [];
        for (const value of data) {
            let found = false;
            for (const existing of result) {
                if (existing === value) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                result.push(value);
            }
        }
        return result;
        // {/fact}
    }

    efficientRemoveDuplicates(data: number[]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return [...new Set(data)];
        // {/fact}
    }

    findMaximum(data: number[]): number {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        let max = data[0];
        for (let i = 1; i < data.length; i++) {
            if (data[i] > max) {
                max = data[i];
            }
        }
        return max;
        // {/fact}
    }

    efficientFindMaximum(data: number[]): number {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return Math.max(...data);
        // {/fact}
    }
}

const processor = new ArrayProcessor();
const data = [1, -2, 3, -4, 5];
const result = processor.processData(data);
console.log(result);