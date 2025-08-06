// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function processNumbers(nums) {
    let result = [];
    for (let n of nums) {
        if (n % 2 === 0) {
            if (n > 10) {
                if (n < 100) {
                    result.push(n * 2);
                } else {
                    result.push(n / 2);
                }
            } else {
                result.push(n + 1);
            }
        } else {
            if (n > 5) {
                result.push(n - 1);
            } else {
                result.push(n + 3);
            }
        }
    }
    return result;
}
// {/fact}