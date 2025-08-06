// {fact rule=code-quality-performance@v1.0 defects=1}
function mergeArrays(arr1, arr2) {
    let result = [];
    for (let item of arr1) {
        result.push(item);
    }
    for (let item of arr2) {
        result.push(item);
    }
    return result;
}
// {/fact}