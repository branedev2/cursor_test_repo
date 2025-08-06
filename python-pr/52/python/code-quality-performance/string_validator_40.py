# {fact rule=code-quality-performance@v1.0 defects=0}
def is_valid_email(email):
    import re
    return re.match(r'^[A-Za-z0-9+_.-]+@(.+)$', email) is not None
# {/fact}