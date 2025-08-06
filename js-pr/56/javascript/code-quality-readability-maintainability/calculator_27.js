// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function calculateComplexFormula(a, b, c, d, e, f, g, h, i, j) {
    const allValuesPresent = [a, b, c, d, e, f, g, h, i, j].every(val => val !== undefined && val !== null);
    
    if (!allValuesPresent) {
        return 0;
    }
    
    const term1 = a + b * c;
    const term2 = d / e;
    const term3 = f * g;
    const term4 = h + i * j;
    
    return term1 - term2 + term3 - term4;
}
// {/fact}