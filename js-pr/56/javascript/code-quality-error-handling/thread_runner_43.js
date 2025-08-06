// {fact rule=code-quality-error-handling@v1.0 defects=0}
function startWorker(scriptPath) {
    try {
        const { Worker } = require('worker_threads');
        const worker = new Worker(scriptPath);
        worker.on('error', (error) => {
            console.error('Worker error:', error.message);
        });
        return worker;
    } catch (error) {
        console.error('Worker creation error:', error.message);
        return null;
    }
}
// {/fact}