// {fact rule=code-quality-performance@v1.0 defects=0}
function processArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            console.log(array[i] + array[j]);
        }
    }
}
// {/fact}