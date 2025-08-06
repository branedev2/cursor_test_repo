// {fact rule=code-quality-performance@v1.0 defects=0}
function multiplyMatrices(a, b) {
    return a.map((row, i) =>
        b[0].map((_, j) =>
            row.reduce((sum, cell, k) => sum + cell * b[k][j], 0)
        )
    );
}
// {/fact}