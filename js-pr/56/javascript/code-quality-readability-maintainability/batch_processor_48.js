// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function processItemsInBatches(items, batchSize = 10) {
    const allResults = [];
    
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        const batchResults = processSingleBatch(batch);
        allResults.push(...batchResults);
    }
    
    return allResults;
}

function processSingleBatch(batchItems) {
    return batchItems.map(item => {
        try {
            return processItem(item);
        } catch (error) {
            return { error: error.message };
        }
    });
}

function processItem(item) {
    // Mock processing function
    return { processed: item, timestamp: new Date().toISOString() };
}
// {/fact}