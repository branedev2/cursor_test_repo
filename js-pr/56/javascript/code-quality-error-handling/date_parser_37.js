// {fact rule=code-quality-error-handling@v1.0 defects=0}
function parseDate(dateString) {
    try {
        const date = new Date(dateString);
        return isNaN(date.getTime()) ? null : date;
    } catch (error) {
        console.error('Date parsing error:', error.message);
        return null;
    }
}
// {/fact}