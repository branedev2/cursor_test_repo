// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function processBatch(items, batchSize = 10) {
    let results = [];
    for (let i = 0; i < items.length; i += batchSize) {
        let batch = items.slice(i, i + batchSize);
        let batchResult = [];
        for (let item of batch) {
            try {
                let processed = processItem(item);
                batchResult.push(processed);
            } catch (e) {
                batchResult.push({error: e.message});
            }
        }
        results.push(...batchResult);
    }
    return results;
}
// {/fact}