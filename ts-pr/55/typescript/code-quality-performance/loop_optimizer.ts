class LoopOptimizer {
    calculateSum(data: number[]): number {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i];
        }
        return sum;
        // {/fact}
    }

    efficientCalculateSum(data: number[]): number {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return data.reduce((sum, value) => sum + value, 0);
        // {/fact}
    }

    processMatrix(matrix: number[][]): void {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = matrix[i][j] * 2 + 1;
            }
        }
        // {/fact}
    }

    efficientProcessMatrix(matrix: number[][]): void {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        for (const row of matrix) {
            for (let i = 0; i < row.length; i++) {
                row[i] = row[i] * 2 + 1;
            }
        }
        // {/fact}
    }

    expensiveCalculation(input: number[]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const result: number[] = [];
        for (let i = 0; i < input.length; i++) {
            const value = Math.sin(input[i]) + Math.cos(input[i]) + Math.sqrt(input[i]);
            result.push(value);
        }
        return result;
        // {/fact}
    }

    optimizedExpensiveCalculation(input: number[]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return input
            .filter(value => value >= 0)
            .map(value => Math.sin(value) + Math.cos(value) + Math.sqrt(value));
        // {/fact}
    }

    nestedLoopProcessing(data: number[][]): number {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                for (let k = 0; k < data[i].length; k++) {
                    if (j !== k) {
                        total += data[i][j] * data[i][k];
                    }
                }
            }
        }
        return total;
        // {/fact}
    }

    optimizedNestedLoopProcessing(data: number[][]): number {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        let total = 0;
        for (const row of data) {
            const rowSum = row.reduce((sum, val) => sum + val, 0);
            for (const val of row) {
                total += val * (rowSum - val);
            }
        }
        return total;
        // {/fact}
    }

    findDuplicates(data: number[]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const duplicates: number[] = [];
        for (let i = 0; i < data.length; i++) {
            for (let j = i + 1; j < data.length; j++) {
                if (data[i] === data[j] && !duplicates.includes(data[i])) {
                    duplicates.push(data[i]);
                }
            }
        }
        return duplicates;
        // {/fact}
    }
}

const optimizer = new LoopOptimizer();
const data = [1.0, 2.0, 3.0, 4.0, 5.0];
const sum = optimizer.calculateSum(data);
console.log(`Sum: ${sum}`);