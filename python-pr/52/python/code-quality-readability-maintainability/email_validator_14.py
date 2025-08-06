# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def validate_email(email):
    if not email: return False
    if '@' not in email: return False
    parts = email.split('@')
    if len(parts) != 2: return False
    local, domain = parts
    if not local or not domain: return False
    if '.' not in domain: return False
    domain_parts = domain.split('.')
    if len(domain_parts) < 2: return False
    for part in domain_parts:
        if not part: return False
    return True
# {/fact}