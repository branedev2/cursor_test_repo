// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function assessPasswordStrength(password) {
    if (password.length < 8) {
        return 'weak';
    }
    
    const strengthCriteria = {
        hasUppercase: /[A-Z]/.test(password),
        hasLowercase: /[a-z]/.test(password),
        hasDigit: /\d/.test(password),
        hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)
    };
    
    const criteriaMet = Object.values(strengthCriteria).filter(Boolean).length;
    
    if (criteriaMet >= 3) {
        return 'strong';
    } else if (criteriaMet >= 2) {
        return 'medium';
    } else {
        return 'weak';
    }
}
// {/fact}