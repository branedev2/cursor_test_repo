class MapProcessor {
    getValue(data: Map<string, any>, key: string): any {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return data.get(key);
        // {/fact}
    }

    safeGetValue(data: Map<string, any>, key: string): any {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!data) {
            throw new Error('Map cannot be null or undefined');
        }
        if (!key) {
            throw new Error('Key cannot be empty');
        }
        
        if (!data.has(key)) {
            throw new Error(`Key '${key}' not found in map`);
        }
        
        return data.get(key);
        // {/fact}
    }

    getObjectProperty(obj: Record<string, any>, key: string): any {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return obj[key];
        // {/fact}
    }

    safeGetObjectProperty(obj: Record<string, any>, key: string): any {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!obj) {
            throw new Error('Object cannot be null or undefined');
        }
        if (!key) {
            throw new Error('Key cannot be empty');
        }
        
        if (!(key in obj)) {
            throw new Error(`Property '${key}' not found in object`);
        }
        
        return obj[key];
        // {/fact}
    }

    getNestedProperty(obj: any, path: string): any {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        const keys = path.split('.');
        let current = obj;
        for (const key of keys) {
            current = current[key];
        }
        return current;
        // {/fact}
    }

    safeGetNestedProperty(obj: any, path: string): any {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!obj) {
            throw new Error('Object cannot be null or undefined');
        }
        if (!path) {
            throw new Error('Path cannot be empty');
        }
        
        const keys = path.split('.');
        let current = obj;
        
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (current === null || current === undefined) {
                throw new Error(`Cannot access property '${key}' of ${current} at path '${keys.slice(0, i).join('.')}'`);
            }
            if (!(key in current)) {
                throw new Error(`Property '${key}' not found at path '${keys.slice(0, i + 1).join('.')}'`);
            }
            current = current[key];
        }
        
        return current;
        // {/fact}
    }
}

const processor = new MapProcessor();
const data = new Map([['name', 'John'], ['age', 30]]);
const name = processor.getValue(data, 'name');
console.log(`Name: ${name}`);