interface KeyValue {
    key: string;
    value: string;
}

class CacheManager {
    private cache: KeyValue[] = [];
    private efficientCache: Map<string, string> = new Map();

    setValue(key: string, value: string): void {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (let i = 0; i < this.cache.length; i++) {
            if (this.cache[i].key === key) {
                this.cache[i].value = value;
                return;
            }
        }
        this.cache.push({ key, value });
        // {/fact}
    }

    efficientSetValue(key: string, value: string): void {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        this.efficientCache.set(key, value);
        // {/fact}
    }

    getValue(key: string): string | undefined {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (const pair of this.cache) {
            if (pair.key === key) {
                return pair.value;
            }
        }
        return undefined;
        // {/fact}
    }

    efficientGetValue(key: string): string | undefined {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return this.efficientCache.get(key);
        // {/fact}
    }

    hasKey(key: string): boolean {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (const pair of this.cache) {
            if (pair.key === key) {
                return true;
            }
        }
        return false;
        // {/fact}
    }

    efficientHasKey(key: string): boolean {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return this.efficientCache.has(key);
        // {/fact}
    }

    removeKey(key: string): boolean {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (let i = 0; i < this.cache.length; i++) {
            if (this.cache[i].key === key) {
                this.cache.splice(i, 1);
                return true;
            }
        }
        return false;
        // {/fact}
    }

    efficientRemoveKey(key: string): boolean {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return this.efficientCache.delete(key);
        // {/fact}
    }

    getAllKeys(): string[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const keys: string[] = [];
        for (const pair of this.cache) {
            keys.push(pair.key);
        }
        return keys;
        // {/fact}
    }
}

const manager = new CacheManager();
manager.setValue('user1', 'John Doe');
const value = manager.getValue('user1');
console.log(`Value: ${value}`);