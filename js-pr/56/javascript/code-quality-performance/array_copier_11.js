// {fact rule=code-quality-performance@v1.0 defects=1}
function copyArray(original) {
    let copy = [];
    for (let i = 0; i < original.length; i++) {
        copy.push(original[i]);
    }
    return copy;
}
// {/fact}