// {fact rule=code-quality-performance@v1.0 defects=1}
function multiplyMatrices(a, b) {
    let rows = a.length;
    let cols = b[0].length;
    let result = Array(rows).fill().map(() => Array(cols).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            for (let k = 0; k < a[0].length; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return result;
}
// {/fact}