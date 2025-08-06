class StringParser {
    parseInteger(str: string): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return parseInt(str);
        // {/fact}
    }

    safeParseInteger(str: string): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!str || str.trim() === '') {
            throw new Error('Empty string cannot be parsed');
        }
        
        const result = parseInt(str);
        if (isNaN(result)) {
            throw new Error(`Failed to parse '${str}' as integer`);
        }
        return result;
        // {/fact}
    }

    parseFloat(str: string): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return parseFloat(str);
        // {/fact}
    }

    safeParseFloat(str: string): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!str || str.trim() === '') {
            throw new Error('Empty string cannot be parsed');
        }
        
        const result = parseFloat(str);
        if (isNaN(result)) {
            throw new Error(`Failed to parse '${str}' as float`);
        }
        return result;
        // {/fact}
    }

    parseJSON<T>(jsonStr: string): T {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return JSON.parse(jsonStr);
        // {/fact}
    }

    safeParseJSON<T>(jsonStr: string): T {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!jsonStr || jsonStr.trim() === '') {
            throw new Error('Empty JSON string cannot be parsed');
        }
        
        try {
            return JSON.parse(jsonStr);
        } catch (error) {
            throw new Error(`Failed to parse JSON: ${error}`);
        }
        // {/fact}
    }
}

const parser = new StringParser();
const num = parser.parseInteger('123');
console.log(`Number: ${num}`);