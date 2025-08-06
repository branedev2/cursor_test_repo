// {fact rule=code-quality-logging@v1.0 defects=1}
function riskyOperation() {
    try {
        dangerousFunction();
    } catch (e) {
        // Silent catch
    }
}
// {/fact}