// {fact rule=code-quality-error-handling@v1.0 defects=1}
function startWorker(scriptPath) {
    const { Worker } = require('worker_threads');
    const worker = new Worker(scriptPath);
    return worker;
}
// {/fact}