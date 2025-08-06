// {fact rule=code-quality-performance@v1.0 defects=1}
function processItems(items) {
    let itemArray = Array.from(items);
    for (let i = 0; i < itemArray.length; i++) {
        console.log(itemArray[i]);
    }
}
// {/fact}