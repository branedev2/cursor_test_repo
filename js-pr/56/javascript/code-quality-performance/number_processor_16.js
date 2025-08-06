// {fact rule=code-quality-performance@v1.0 defects=1}
function processNumbers(numbers) {
    let result = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            result.push(num * 2);
        }
    }
    return result;
}
// {/fact}