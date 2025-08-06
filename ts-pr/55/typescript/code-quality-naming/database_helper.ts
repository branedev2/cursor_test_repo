class DatabaseHelper {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    private conn_str: string = '';
    private is_conn: boolean = false;
    private max_conn: number = 0;
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    private connectionString: string = '';
    private isConnected: boolean = false;
    private maxConnections: number = 0;
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    init(cs: string, mc: number): boolean {
        this.conn_str = cs;
        this.max_conn = mc;
        this.is_conn = true;
        return true;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    initializeConnection(connectionString: string, maxConnections: number): boolean {
        this.connectionString = connectionString;
        this.maxConnections = maxConnections;
        this.isConnected = true;
        return true;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    exec(q: string): any[] {
        const res = [{ id: 1, name: 'row1' }, { id: 2, name: 'row2' }];
        return res;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    executeQuery(sqlQuery: string): any[] {
        const queryResults = [{ id: 1, name: 'row1' }, { id: 2, name: 'row2' }];
        return queryResults;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    cls(): void {
        this.is_conn = false;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    closeConnection(): void {
        this.isConnected = false;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    get st(): boolean {
        return this.is_conn;
    }
    // {/fact}
}

const helper = new DatabaseHelper();
helper.init('localhost:5432', 10);
const results = helper.exec('SELECT * FROM users');
console.log(results);