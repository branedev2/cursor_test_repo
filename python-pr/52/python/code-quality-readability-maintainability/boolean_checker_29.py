# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def check_boolean_value(value):
    if value is None:
        return None
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float)):
        return bool(value)
    return False
# {/fact}