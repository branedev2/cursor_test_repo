// {fact rule=code-quality-performance@v1.0 defects=1}
function processObject(obj) {
    for (let key in obj) {
        let value = obj[key];
        console.log(`${key}: ${value}`);
    }
}
// {/fact}