// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
class LRUCache {
    constructor(maxSize = 100) {
        this.cache = new Map();
        this.accessCounts = new Map();
        this.maxSize = maxSize;
    }
    
    get(key) {
        if (this.cache.has(key)) {
            this.updateAccessCount(key);
            return this.cache.get(key);
        }
        return null;
    }
    
    set(key, value) {
        if (this.cache.size >= this.maxSize) {
            this.evictLeastUsedItem();
        }
        
        this.cache.set(key, value);
        this.accessCounts.set(key, 1);
    }
    
    updateAccessCount(key) {
        const currentCount = this.accessCounts.get(key) || 0;
        this.accessCounts.set(key, currentCount + 1);
    }
    
    evictLeastUsedItem() {
        const leastUsedKey = this.findLeastUsedKey();
        this.cache.delete(leastUsedKey);
        this.accessCounts.delete(leastUsedKey);
    }
    
    findLeastUsedKey() {
        let minCount = Infinity;
        let leastUsedKey = null;
        
        for (const [key, count] of this.accessCounts.entries()) {
            if (count < minCount) {
                minCount = count;
                leastUsedKey = key;
            }
        }
        
        return leastUsedKey;
    }
}
// {/fact}