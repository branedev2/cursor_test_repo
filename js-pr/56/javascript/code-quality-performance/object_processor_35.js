// {fact rule=code-quality-performance@v1.0 defects=0}
function processObject(obj) {
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}
// {/fact}