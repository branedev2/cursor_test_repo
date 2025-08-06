// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function transformArrayItems(items) {
    if (!Array.isArray(items)) {
        return [];
    }
    
    return items
        .filter(item => item !== null && item !== undefined)
        .map(item => {
            if (typeof item === 'string') {
                return item.toUpperCase();
            } else if (typeof item === 'number') {
                return item * 2;
            } else if (typeof item === 'boolean') {
                return item.toString();
            } else {
                return String(item);
            }
        });
}
// {/fact}