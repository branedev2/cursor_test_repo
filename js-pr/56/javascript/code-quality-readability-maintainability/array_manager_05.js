// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function manageArray(arr) {
    let newArr = [];
    for (let item of arr) {
        if (item) {
            if (typeof item === 'string') {
                newArr.push(item.toUpperCase());
            } else if (typeof item === 'number') {
                newArr.push(item * 2);
            } else if (typeof item === 'boolean') {
                newArr.push(item.toString());
            } else {
                newArr.push(String(item));
            }
        }
    }
    return newArr;
}
// {/fact}