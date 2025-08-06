// {fact rule=code-quality-performance@v1.0 defects=0}
function processNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0).map(num => num * 2);
}
// {/fact}