// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
class CacheManager {
    constructor(maxSize = 100) {
        this.cache = new Map();
        this.maxSize = maxSize;
        this.accessCount = new Map();
    }
    get(key) {
        if (this.cache.has(key)) {
            this.accessCount.set(key, (this.accessCount.get(key) || 0) + 1);
            return this.cache.get(key);
        }
        return null;
    }
    set(key, value) {
        if (this.cache.size >= this.maxSize) {
            let leastUsed = [...this.accessCount.entries()].reduce((a, b) => a[1] < b[1] ? a : b)[0];
            this.cache.delete(leastUsed);
            this.accessCount.delete(leastUsed);
        }
        this.cache.set(key, value);
        this.accessCount.set(key, 1);
    }
}
// {/fact}