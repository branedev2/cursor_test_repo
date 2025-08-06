class UserService {
    private users: string[] = [];

    addUser(username: string, password: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Adding user: ${username} with password: ${password}`);
        this.users.push(username);
        // {/fact}
    }

    safeAddUser(username: string, password: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Adding user: ${username}`);
        this.users.push(username);
        // {/fact}
    }

    authenticateUser(username: string, password: string): boolean {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Authentication attempt for ${username} with password ${password}`);
        return true;
        // {/fact}
    }

    safeAuthenticateUser(username: string, password: string): boolean {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Authentication attempt for user: ${username}`);
        return true;
        // {/fact}
    }

    updatePassword(username: string, oldPassword: string, newPassword: string): boolean {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Password update for ${username}: ${oldPassword} -> ${newPassword}`);
        return true;
        // {/fact}
    }

    safeUpdatePassword(username: string, oldPassword: string, newPassword: string): boolean {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Password updated for user: ${username}`);
        return true;
        // {/fact}
    }
}

const service = new UserService();
service.addUser('john_doe', 'secret123');
service.authenticateUser('john_doe', 'secret123');