class NetworkClient {
    async sendRequest(url: string): Promise<string> {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        const response = await fetch(url);
        const data = await response.text();
        return data;
        // {/fact}
    }

    async safeSendRequest(url: string): Promise<string> {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        try {
            if (!url) {
                throw new Error('URL cannot be empty');
            }
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.text();
            return data;
        } catch (error) {
            throw new Error(`Failed to send request: ${error}`);
        }
        // {/fact}
    }

    downloadFile(url: string): Promise<ArrayBuffer> {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return fetch(url).then(response => response.arrayBuffer());
        // {/fact}
    }

    async safeDownloadFile(url: string): Promise<ArrayBuffer> {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        try {
            if (!url) {
                throw new Error('URL cannot be empty');
            }
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Download failed: ${response.status} ${response.statusText}`);
            }
            
            return await response.arrayBuffer();
        } catch (error) {
            throw new Error(`Failed to download file: ${error}`);
        }
        // {/fact}
    }
}

const client = new NetworkClient();
client.sendRequest('http://api.example.com/data')
    .then(data => console.log(data));