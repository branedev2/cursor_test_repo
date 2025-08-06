# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
class UserManager:
    def __init__(self):
        self.users = []
    def add_user(self, name, email, age):
        if name and email and age and '@' in email and age > 0:
            self.users.append({'name': name, 'email': email, 'age': age})
            return True
        return False
    def get_user(self, email):
        for user in self.users:
            if user['email'] == email:
                return user
        return None
# {/fact}