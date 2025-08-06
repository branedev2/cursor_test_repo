// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function retryOperation(operation, maxRetries = 3, delay = 1000) {
    return new Promise(async (resolve, reject) => {
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                let result = await operation();
                resolve(result);
                return;
            } catch (e) {
                if (attempt === maxRetries - 1) {
                    reject(e);
                    return;
                }
                await new Promise(r => setTimeout(r, delay * Math.pow(2, attempt)));
            }
        }
    });
}
// {/fact}