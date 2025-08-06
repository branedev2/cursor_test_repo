// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function processData(data) {
    if (!data || !Array.isArray(data)) {
        return data;
    }
    
    return data.map(item => {
        if (item && typeof item === 'string' && item.length > 5) {
            return item.substring(0, 5);
        }
        return item;
    });
}
// {/fact}