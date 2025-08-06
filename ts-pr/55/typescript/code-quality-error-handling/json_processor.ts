interface User {
    name: string;
    email: string;
    age: number;
}

class JSONProcessor {
    parseUser(data: string): User {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        const user = JSON.parse(data);
        return user;
        // {/fact}
    }

    safeParseUser(data: string): User {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!data || data.trim() === '') {
            throw new Error('Empty JSON data');
        }
        
        try {
            const user = JSON.parse(data) as User;
            
            if (!user.name || !user.email) {
                throw new Error('User name and email are required');
            }
            
            if (typeof user.age !== 'number' || user.age < 0) {
                throw new Error('Invalid age value');
            }
            
            return user;
        } catch (error) {
            throw new Error(`Failed to parse user JSON: ${error}`);
        }
        // {/fact}
    }

    serializeUser(user: User): string {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return JSON.stringify(user);
        // {/fact}
    }

    safeSerializeUser(user: User): string {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!user) {
            throw new Error('User object cannot be null or undefined');
        }
        
        try {
            return JSON.stringify(user);
        } catch (error) {
            throw new Error(`Failed to serialize user: ${error}`);
        }
        // {/fact}
    }

    parseArray<T>(data: string): T[] {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        const result = JSON.parse(data);
        return result;
        // {/fact}
    }
}

const processor = new JSONProcessor();
const jsonData = '{"name":"John","email":"john@example.com","age":30}';
const user = processor.parseUser(jsonData);
console.log(user);