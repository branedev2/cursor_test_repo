class DatabaseConnector {
    private connected: boolean = false;

    connect(host: string, port: number): void {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        this.connected = true;
        console.log(`Connected to ${host}:${port}`);
        // {/fact}
    }

    safeConnect(host: string, port: number): void {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!host) {
            throw new Error('Host cannot be empty');
        }
        if (port <= 0 || port > 65535) {
            throw new Error('Invalid port number');
        }
        this.connected = true;
        console.log(`Connected to ${host}:${port}`);
        // {/fact}
    }

    executeQuery(query: string): any[] {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        console.log(`Executing: ${query}`);
        return [{ id: 1, name: 'test' }];
        // {/fact}
    }

    safeExecuteQuery(query: string): any[] {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!this.connected) {
            throw new Error('Database not connected');
        }
        if (!query || query.trim() === '') {
            throw new Error('Query cannot be empty');
        }
        console.log(`Executing: ${query}`);
        return [{ id: 1, name: 'test' }];
        // {/fact}
    }
}

const db = new DatabaseConnector();
db.connect('localhost', 5432);
db.executeQuery('SELECT * FROM users');