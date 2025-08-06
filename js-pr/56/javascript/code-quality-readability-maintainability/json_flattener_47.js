// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function flattenNestedJson(data, parentKey = '', separator = '_') {
    const flattenedItems = [];
    
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        Object.entries(data).forEach(([key, value]) => {
            const newKey = parentKey ? `${parentKey}${separator}${key}` : key;
            flattenedItems.push(...flattenValue(value, newKey, separator));
        });
    }
    
    return Object.fromEntries(flattenedItems);
}

function flattenValue(value, key, separator) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return Object.entries(flattenNestedJson(value, key, separator));
    } else if (Array.isArray(value)) {
        return flattenArray(value, key, separator);
    } else {
        return [[key, value]];
    }
}

function flattenArray(items, parentKey, separator) {
    const flattenedItems = [];
    
    items.forEach((item, index) => {
        const indexedKey = `${parentKey}${separator}${index}`;
        flattenedItems.push(...flattenValue(item, indexedKey, separator));
    });
    
    return flattenedItems;
}
// {/fact}