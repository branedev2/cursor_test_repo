// {fact rule=code-quality-performance@v1.0 defects=1}
function removeDuplicates(arr) {
    let result = [];
    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}
// {/fact}