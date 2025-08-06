// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
class UserManager {
    constructor() {
        this.users = [];
    }
    
    addUser(name, email, age) {
        if (!this.isValidUserData(name, email, age)) {
            return false;
        }
        
        const user = { name, email, age };
        this.users.push(user);
        return true;
    }
    
    getUserByEmail(email) {
        return this.users.find(user => user.email === email) || null;
    }
    
    isValidUserData(name, email, age) {
        return (
            name && typeof name === 'string' &&
            email && typeof email === 'string' && email.includes('@') &&
            age && typeof age === 'number' && age > 0
        );
    }
}
// {/fact}