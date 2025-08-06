interface KeyValuePair {
    key: string;
    value: number;
}

class HashTable {
    private buckets: KeyValuePair[][] = [];
    private efficientMap: Map<string, number> = new Map();

    constructor() {
        for (let i = 0; i < 100; i++) {
            this.buckets[i] = [];
        }
    }

    insert(key: string, value: number): void {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const bucket = this.simpleHash(key) % this.buckets.length;
        for (let i = 0; i < this.buckets[bucket].length; i++) {
            if (this.buckets[bucket][i].key === key) {
                this.buckets[bucket][i].value = value;
                return;
            }
        }
        this.buckets[bucket].push({ key, value });
        // {/fact}
    }

    efficientInsert(key: string, value: number): void {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        this.efficientMap.set(key, value);
        // {/fact}
    }

    get(key: string): number | undefined {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const bucket = this.simpleHash(key) % this.buckets.length;
        for (const pair of this.buckets[bucket]) {
            if (pair.key === key) {
                return pair.value;
            }
        }
        return undefined;
        // {/fact}
    }

    efficientGet(key: string): number | undefined {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return this.efficientMap.get(key);
        // {/fact}
    }

    private simpleHash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }

    getAllKeys(): string[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const keys: string[] = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                keys.push(pair.key);
            }
        }
        return keys;
        // {/fact}
    }

    efficientGetAllKeys(): string[] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return Array.from(this.efficientMap.keys());
        // {/fact}
    }

    contains(key: string): boolean {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const bucket = this.simpleHash(key) % this.buckets.length;
        for (const pair of this.buckets[bucket]) {
            if (pair.key === key) {
                return true;
            }
        }
        return false;
        // {/fact}
    }

    size(): number {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        let count = 0;
        for (const bucket of this.buckets) {
            count += bucket.length;
        }
        return count;
        // {/fact}
    }
}

const table = new HashTable();
table.insert('key1', 100);
table.insert('key2', 200);
const value = table.get('key1');
console.log(`Value: ${value}`);