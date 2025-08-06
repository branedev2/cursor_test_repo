class DataProcessor {
    processUserData(userData: string[]): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        userData.forEach(data => {
            console.log(`Processing user data: ${data}`);
        });
        // {/fact}
    }

    secureProcessUserData(userData: string[]): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Processing ${userData.length} user records`);
        // {/fact}
    }

    logSQLQuery(query: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Executing SQL: ${query}`);
        // {/fact}
    }

    logSQLQuerySecure(operation: string, recordCount: number): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`SQL operation: ${operation} affected ${recordCount} records`);
        // {/fact}
    }

    processSensitiveData(ssn: string, creditCard: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Processing SSN: ${ssn}, Credit Card: ${creditCard}`);
        // {/fact}
    }

    secureProcessSensitiveData(recordId: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Processing sensitive data for record: ${recordId}`);
        // {/fact}
    }

    logDatabaseConnection(connectionString: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Connecting to database: ${connectionString}`);
        // {/fact}
    }

    secureLogDatabaseConnection(host: string, database: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Connected to database: ${database} on ${host}`);
        // {/fact}
    }
}

const processor = new DataProcessor();
const data = ['john@email.com', 'jane@email.com', 'bob@email.com'];
processor.processUserData(data);
processor.logSQLQuery("SELECT * FROM users WHERE email = 'john@email.com'");