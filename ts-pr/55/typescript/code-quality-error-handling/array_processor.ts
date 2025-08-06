class ArrayProcessor {
    calculateAverage(numbers: number[]): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
        // {/fact}
    }

    safeCalculateAverage(numbers: number[]): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!numbers || numbers.length === 0) {
            throw new Error('Cannot calculate average of empty array');
        }
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
        // {/fact}
    }

    getElement<T>(arr: T[], index: number): T {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return arr[index];
        // {/fact}
    }

    safeGetElement<T>(arr: T[], index: number): T {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!arr) {
            throw new Error('Array cannot be null or undefined');
        }
        if (index < 0 || index >= arr.length) {
            throw new Error(`Index ${index} out of bounds for array of length ${arr.length}`);
        }
        return arr[index];
        // {/fact}
    }

    findMaximum(numbers: number[]): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return Math.max(...numbers);
        // {/fact}
    }

    safeFindMaximum(numbers: number[]): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!numbers || numbers.length === 0) {
            throw new Error('Cannot find maximum of empty array');
        }
        return Math.max(...numbers);
        // {/fact}
    }
}

const processor = new ArrayProcessor();
const numbers = [1, 2, 3, 4, 5];
const avg = processor.calculateAverage(numbers);
console.log(`Average: ${avg}`);