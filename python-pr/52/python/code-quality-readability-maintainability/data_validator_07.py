# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def validate(data):
    if not data: return False
    if not isinstance(data, dict): return False
    if 'name' not in data: return False
    if 'age' not in data: return False
    if not isinstance(data['name'], str): return False
    if not isinstance(data['age'], int): return False
    if len(data['name']) < 2: return False
    if data['age'] < 0: return False
    if data['age'] > 150: return False
    return True
# {/fact}