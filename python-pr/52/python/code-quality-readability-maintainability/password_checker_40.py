# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def assess_password_strength(password):
    if len(password) < 8:
        return 'weak'
    
    strength_criteria = {
        'has_uppercase': any(c.isupper() for c in password),
        'has_lowercase': any(c.islower() for c in password),
        'has_digit': any(c.isdigit() for c in password),
        'has_special': any(c in '!@#$%^&*()_+-=[]{}|;:,.<>?' for c in password)
    }
    
    criteria_met = sum(strength_criteria.values())
    
    if criteria_met >= 3:
        return 'strong'
    elif criteria_met >= 2:
        return 'medium'
    else:
        return 'weak'
# {/fact}