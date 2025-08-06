class PromiseHandler {
    async processData(data: any[]): Promise<any[]> {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        const promises = data.map(item => this.processItem(item));
        const results = await Promise.all(promises);
        return results;
        // {/fact}
    }

    async safeProcessData(data: any[]): Promise<any[]> {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!data || !Array.isArray(data)) {
            throw new Error('Invalid data array');
        }
        
        try {
            const promises = data.map(item => this.processItem(item));
            const results = await Promise.allSettled(promises);
            
            const successful = results
                .filter(result => result.status === 'fulfilled')
                .map(result => (result as PromiseFulfilledResult<any>).value);
                
            const failed = results
                .filter(result => result.status === 'rejected')
                .map(result => (result as PromiseRejectedResult).reason);
                
            if (failed.length > 0) {
                console.warn(`${failed.length} items failed to process:`, failed);
            }
            
            return successful;
        } catch (error) {
            throw new Error(`Failed to process data: ${error}`);
        }
        // {/fact}
    }

    private async processItem(item: any): Promise<any> {
        // Simulate async processing that might fail
        if (Math.random() < 0.1) {
            throw new Error(`Failed to process item: ${item}`);
        }
        return { processed: item, timestamp: Date.now() };
    }

    async fetchMultipleUrls(urls: string[]): Promise<string[]> {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        const promises = urls.map(url => fetch(url).then(r => r.text()));
        return Promise.all(promises);
        // {/fact}
    }

    async safeFetchMultipleUrls(urls: string[]): Promise<string[]> {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!urls || !Array.isArray(urls)) {
            throw new Error('Invalid URLs array');
        }
        
        const promises = urls.map(async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                return await response.text();
            } catch (error) {
                throw new Error(`Failed to fetch ${url}: ${error}`);
            }
        });
        
        const results = await Promise.allSettled(promises);
        const successful = results
            .filter(result => result.status === 'fulfilled')
            .map(result => (result as PromiseFulfilledResult<string>).value);
            
        return successful;
        // {/fact}
    }
}

const handler = new PromiseHandler();
handler.processData([1, 2, 3, 4, 5])
    .then(results => console.log('Results:', results));