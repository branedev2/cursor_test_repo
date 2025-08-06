# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def check_password_strength(password):
    if len(password) < 8: return 'weak'
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_special = any(c in '!@#$%^&*()_+-=[]{}|;:,.<>?' for c in password)
    score = sum([has_upper, has_lower, has_digit, has_special])
    return 'strong' if score >= 3 else 'medium' if score >= 2 else 'weak'
# {/fact}