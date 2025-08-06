// {fact rule=code-quality-performance@v1.0 defects=1}
function calculateSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
// {/fact}