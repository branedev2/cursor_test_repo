// {fact rule=code-quality-performance@v1.0 defects=0}
function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    return emailRegex.test(email);
}
// {/fact}