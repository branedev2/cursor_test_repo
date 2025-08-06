// {fact rule=code-quality-error-handling@v1.0 defects=0}
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        return a / b;
    } catch (error) {
        console.error('Calculation error:', error.message);
        return null;
    }
}
// {/fact}