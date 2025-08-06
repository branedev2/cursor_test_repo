// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(name, email, age) {
        if (name && email && age && email.includes('@') && age > 0) {
            this.users.push({name: name, email: email, age: age});
            return true;
        }
        return false;
    }
    getUser(email) {
        for (let user of this.users) {
            if (user.email === email) {
                return user;
            }
        }
        return null;
    }
}
// {/fact}