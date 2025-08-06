# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
class UserManager:
    def __init__(self):
        self.users = []
    
    def add_user(self, name, email, age):
        if not self._is_valid_user_data(name, email, age):
            return False
        
        user = {'name': name, 'email': email, 'age': age}
        self.users.append(user)
        return True
    
    def get_user_by_email(self, email):
        for user in self.users:
            if user['email'] == email:
                return user
        return None
    
    def _is_valid_user_data(self, name, email, age):
        return (
            name and isinstance(name, str) and
            email and isinstance(email, str) and '@' in email and
            age and isinstance(age, int) and age > 0
        )
# {/fact}