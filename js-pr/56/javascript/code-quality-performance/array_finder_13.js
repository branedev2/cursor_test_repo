// {fact rule=code-quality-performance@v1.0 defects=1}
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
// {/fact}