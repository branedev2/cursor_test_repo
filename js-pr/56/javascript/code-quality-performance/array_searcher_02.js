// {fact rule=code-quality-performance@v1.0 defects=1}
function findElement(arr, target) {
    for (let item of arr) {
        if (item === target) {
            return true;
        }
    }
    return false;
}
// {/fact}