class MemoryAllocator {
    createLargeArray(size: number): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const data: number[] = [];
        for (let i = 0; i < size; i++) {
            data.push(i);
        }
        return data;
        // {/fact}
    }

    efficientCreateLargeArray(size: number): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return Array.from({ length: size }, (_, i) => i);
        // {/fact}
    }

    processData(input: number[]): void {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (let i = 0; i < input.length; i++) {
            const temp: number[] = [];
            for (let j = 0; j < 100; j++) {
                temp.push(input[i] + j);
            }
        }
        // {/fact}
    }

    efficientProcessData(input: number[]): void {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        const temp = new Array(100);
        
        for (const value of input) {
            for (let j = 0; j < 100; j++) {
                temp[j] = value + j;
            }
        }
        // {/fact}
    }

    copyArray(source: number[]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const destination: number[] = [];
        for (const value of source) {
            destination.push(value);
        }
        return destination;
        // {/fact}
    }

    efficientCopyArray(source: number[]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return [...source];
        // {/fact}
    }

    filterAndTransform(data: number[]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const filtered: number[] = [];
        for (const value of data) {
            if (value > 0) {
                filtered.push(value);
            }
        }
        
        const transformed: number[] = [];
        for (const value of filtered) {
            transformed.push(value * 2);
        }
        
        return transformed;
        // {/fact}
    }

    efficientFilterAndTransform(data: number[]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return data.filter(value => value > 0).map(value => value * 2);
        // {/fact}
    }

    createMatrix(rows: number, cols: number): number[][] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const matrix: number[][] = [];
        for (let i = 0; i < rows; i++) {
            const row: number[] = [];
            for (let j = 0; j < cols; j++) {
                row.push(0);
            }
            matrix.push(row);
        }
        return matrix;
        // {/fact}
    }
}

const allocator = new MemoryAllocator();
const data = allocator.createLargeArray(10000);
console.log(`Created array with ${data.length} elements`);