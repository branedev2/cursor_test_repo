class APIClient {
    makeRequest(endpoint: string, headers: Record<string, string>): string {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Making request to: ${endpoint}`);
        Object.entries(headers).forEach(([key, value]) => {
            console.log(`Header: ${key}=${value}`);
        });
        return 'Response data';
        // {/fact}
    }

    secureMakeRequest(endpoint: string, headers: Record<string, string>): string {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Making request to: ${endpoint}`);
        Object.entries(headers).forEach(([key, value]) => {
            if (key.toLowerCase() === 'authorization' || key.toLowerCase() === 'x-api-key') {
                console.log(`Header: ${key}=***REDACTED***`);
            } else {
                console.log(`Header: ${key}=${value}`);
            }
        });
        return 'Response data';
        // {/fact}
    }

    logResponse(statusCode: number, body: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Response: ${statusCode} - Body: ${body}`);
        // {/fact}
    }

    secureLogResponse(statusCode: number, bodySize: number): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Response: ${statusCode} - Size: ${bodySize} bytes`);
        // {/fact}
    }

    logRequestDetails(method: string, url: string, body: any): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`${method} ${url}`);
        console.log(`Request body: ${JSON.stringify(body)}`);
        // {/fact}
    }

    secureLogRequestDetails(method: string, url: string, bodySize: number): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`${method} ${url}`);
        console.log(`Request body size: ${bodySize} bytes`);
        // {/fact}
    }
}

const client = new APIClient();
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer secret_token_123'
};
client.makeRequest('https://api.example.com/users', headers);