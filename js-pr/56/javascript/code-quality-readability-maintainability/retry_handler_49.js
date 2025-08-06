// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
async function executeWithRetry(operation, maxAttempts = 3, baseDelay = 1000) {
    for (let attemptNumber = 0; attemptNumber < maxAttempts; attemptNumber++) {
        try {
            return await operation();
        } catch (error) {
            if (attemptNumber === maxAttempts - 1) {
                throw error;
            }
            
            const delayMs = calculateBackoffDelay(baseDelay, attemptNumber);
            await sleep(delayMs);
        }
    }
}

function calculateBackoffDelay(baseDelay, attemptNumber) {
    return baseDelay * Math.pow(2, attemptNumber);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// {/fact}