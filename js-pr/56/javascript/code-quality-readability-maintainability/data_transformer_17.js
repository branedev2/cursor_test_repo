// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function transformData(data) {
    let transformed = [];
    for (let item of data) {
        if (typeof item === 'object' && item !== null) {
            let newItem = {};
            for (let [key, value] of Object.entries(item)) {
                if (typeof value === 'string') {
                    newItem[key.toLowerCase()] = value.trim().replace(/\b\w/g, l => l.toUpperCase());
                } else if (typeof value === 'number') {
                    newItem[key.toLowerCase()] = value * 1.1;
                } else {
                    newItem[key.toLowerCase()] = value;
                }
            }
            transformed.push(newItem);
        }
    }
    return transformed;
}
// {/fact}