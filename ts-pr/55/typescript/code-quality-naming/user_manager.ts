class UserManager {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    private u: string[] = [];
    private cnt: number = 0;
    private flg: boolean = false;
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    private userList: string[] = [];
    private activeUserCount: number = 0;
    private isSystemInitialized: boolean = false;
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    add(n: string): void {
        this.u.push(n);
        this.cnt++;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    addUser(username: string): void {
        this.userList.push(username);
        this.activeUserCount++;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    del(idx: number): boolean {
        if (idx >= 0 && idx < this.u.length) {
            this.u.splice(idx, 1);
            this.cnt--;
            return true;
        }
        return false;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    removeUserByIndex(userIndex: number): boolean {
        if (userIndex >= 0 && userIndex < this.userList.length) {
            this.userList.splice(userIndex, 1);
            this.activeUserCount--;
            return true;
        }
        return false;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    get cnt_val(): number {
        return this.cnt;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    getUserCount(): number {
        return this.activeUserCount;
    }
    // {/fact}
}

const manager = new UserManager();
manager.add('john');
console.log(`User count: ${manager.cnt_val}`);