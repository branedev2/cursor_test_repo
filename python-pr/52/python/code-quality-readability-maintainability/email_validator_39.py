# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def is_valid_email_address(email):
    if not email or not isinstance(email, str):
        return False
    
    if '@' not in email:
        return False
    
    local_part, domain_part = email.split('@', 1)
    
    if not local_part or not domain_part:
        return False
    
    return _is_valid_domain(domain_part)

def _is_valid_domain(domain):
    if '.' not in domain:
        return False
    
    domain_parts = domain.split('.')
    return len(domain_parts) >= 2 and all(part for part in domain_parts)
# {/fact}