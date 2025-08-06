// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function checkBooleanValue(value) {
    if (value === null || value === undefined) {
        return null;
    }
    
    if (typeof value === 'boolean') {
        return value;
    }
    
    if (typeof value === 'number') {
        return Boolean(value);
    }
    
    return false;
}
// {/fact}