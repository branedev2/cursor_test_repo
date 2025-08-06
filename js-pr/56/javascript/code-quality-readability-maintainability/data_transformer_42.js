// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function transformDictionaryData(dataList) {
    return dataList
        .filter(item => typeof item === 'object' && item !== null)
        .map(item => transformSingleItem(item));
}

function transformSingleItem(item) {
    const transformedItem = {};
    
    Object.entries(item).forEach(([key, value]) => {
        const normalizedKey = key.toLowerCase();
        const transformedValue = transformValue(value);
        transformedItem[normalizedKey] = transformedValue;
    });
    
    return transformedItem;
}

function transformValue(value) {
    if (typeof value === 'string') {
        return value.trim().replace(/\b\w/g, letter => letter.toUpperCase());
    } else if (typeof value === 'number') {
        return value * 1.1;
    } else {
        return value;
    }
}
// {/fact}