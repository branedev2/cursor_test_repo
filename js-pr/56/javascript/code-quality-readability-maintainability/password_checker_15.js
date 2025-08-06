// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function checkPasswordStrength(password) {
    if (password.length < 8) return 'weak';
    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasDigit = /\d/.test(password);
    let hasSpecial = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password);
    let score = [hasUpper, hasLower, hasDigit, hasSpecial].filter(Boolean).length;
    return score >= 3 ? 'strong' : score >= 2 ? 'medium' : 'weak';
}
// {/fact}