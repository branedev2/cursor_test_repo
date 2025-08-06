class MatrixCalculator {
    multiplyMatrices(a: number[][], b: number[][]): number[][] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const rows = a.length;
        const cols = b[0].length;
        const common = a[0].length;
        
        const result: number[][] = [];
        for (let i = 0; i < rows; i++) {
            result[i] = [];
            for (let j = 0; j < cols; j++) {
                result[i][j] = 0;
                for (let k = 0; k < common; k++) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return result;
        // {/fact}
    }

    optimizedMultiplyMatrices(a: number[][], b: number[][]): number[][] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        const rows = a.length;
        const cols = b[0].length;
        const common = a[0].length;
        
        const result: number[][] = Array(rows).fill(null).map(() => Array(cols).fill(0));
        
        // Better cache locality with reordered loops
        for (let i = 0; i < rows; i++) {
            for (let k = 0; k < common; k++) {
                for (let j = 0; j < cols; j++) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return result;
        // {/fact}
    }

    sumRows(matrix: number[][]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const sums: number[] = [];
        for (const row of matrix) {
            let sum = 0;
            for (const val of row) {
                sum += val;
            }
            sums.push(sum);
        }
        return sums;
        // {/fact}
    }

    efficientSumRows(matrix: number[][]): number[] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return matrix.map(row => row.reduce((sum, val) => sum + val, 0));
        // {/fact}
    }

    transposeMatrix(matrix: number[][]): number[][] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const rows = matrix.length;
        const cols = matrix[0].length;
        const result: number[][] = [];
        
        for (let j = 0; j < cols; j++) {
            result[j] = [];
            for (let i = 0; i < rows; i++) {
                result[j][i] = matrix[i][j];
            }
        }
        return result;
        // {/fact}
    }

    efficientTransposeMatrix(matrix: number[][]): number[][] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
        // {/fact}
    }
}

const calc = new MatrixCalculator();
const a = [[1, 2], [3, 4]];
const b = [[5, 6], [7, 8]];
const result = calc.multiplyMatrices(a, b);
console.log(result);