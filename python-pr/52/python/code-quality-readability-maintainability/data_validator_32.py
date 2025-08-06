# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def validate_user_data(user_data):
    if not isinstance(user_data, dict):
        return False
    
    required_fields = ['name', 'age']
    for field in required_fields:
        if field not in user_data:
            return False
    
    name = user_data['name']
    age = user_data['age']
    
    if not isinstance(name, str) or len(name) < 2:
        return False
    
    if not isinstance(age, int) or not (0 <= age <= 150):
        return False
    
    return True
# {/fact}