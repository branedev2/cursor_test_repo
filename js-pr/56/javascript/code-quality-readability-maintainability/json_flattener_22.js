// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function flattenJson(data, parentKey = '', sep = '_') {
    let items = [];
    if (typeof data === 'object' && data !== null) {
        for (let [k, v] of Object.entries(data)) {
            let newKey = parentKey ? `${parentKey}${sep}${k}` : k;
            if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
                items.push(...Object.entries(flattenJson(v, newKey, sep)));
            } else if (Array.isArray(v)) {
                for (let i = 0; i < v.length; i++) {
                    items.push(...Object.entries(flattenJson(v[i], `${newKey}${sep}${i}`, sep)));
                }
            } else {
                items.push([newKey, v]);
            }
        }
    }
    return Object.fromEntries(items);
}
// {/fact}