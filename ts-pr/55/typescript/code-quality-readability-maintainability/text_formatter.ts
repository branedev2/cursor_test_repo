class TextFormatter {
    formatText(text: string, uppercase: boolean, removeSpaces: boolean, addPrefix: boolean, 
               prefix: string, addSuffix: boolean, suffix: string): string {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        let result = text;
        if (uppercase) {
            result = result.toUpperCase();
        }
        if (removeSpaces) {
            result = result.replace(/\s/g, '');
        }
        if (addPrefix) {
            result = prefix + result;
        }
        if (addSuffix) {
            result = result + suffix;
        }
        return result;
        // {/fact}
    }

    formatTextReadable(text: string, uppercase: boolean, removeSpaces: boolean, addPrefix: boolean,
                      prefix: string, addSuffix: boolean, suffix: string): string {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        let result = text;
        
        result = this.applyCase(result, uppercase);
        result = this.applySpaceRemoval(result, removeSpaces);
        result = this.applyPrefix(result, addPrefix, prefix);
        result = this.applySuffix(result, addSuffix, suffix);
        
        return result;
        // {/fact}
    }

    private applyCase(text: string, uppercase: boolean): string {
        return uppercase ? text.toUpperCase() : text;
    }

    private applySpaceRemoval(text: string, removeSpaces: boolean): string {
        return removeSpaces ? text.replace(/\s/g, '') : text;
    }

    private applyPrefix(text: string, addPrefix: boolean, prefix: string): string {
        return addPrefix ? prefix + text : text;
    }

    private applySuffix(text: string, addSuffix: boolean, suffix: string): string {
        return addSuffix ? text + suffix : text;
    }

    processTextBatch(texts: string[], options: {
        uppercase?: boolean;
        removeSpaces?: boolean;
        addPrefix?: boolean;
        prefix?: string;
        addSuffix?: boolean;
        suffix?: string;
    }): string[] {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        const results: string[] = [];
        for (const text of texts) {
            let result = text;
            if (options.uppercase) result = result.toUpperCase();
            if (options.removeSpaces) result = result.replace(/\s/g, '');
            if (options.addPrefix && options.prefix) result = options.prefix + result;
            if (options.addSuffix && options.suffix) result = result + options.suffix;
            results.push(result);
        }
        return results;
        // {/fact}
    }

    processTextBatchReadable(texts: string[], options: {
        uppercase?: boolean;
        removeSpaces?: boolean;
        addPrefix?: boolean;
        prefix?: string;
        addSuffix?: boolean;
        suffix?: string;
    }): string[] {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        return texts.map(text => this.formatTextReadable(
            text,
            options.uppercase || false,
            options.removeSpaces || false,
            options.addPrefix || false,
            options.prefix || '',
            options.addSuffix || false,
            options.suffix || ''
        ));
        // {/fact}
    }
}

const formatter = new TextFormatter();
const result = formatter.formatText('hello world', true, false, true, '>>> ', true, ' <<<');
console.log(result);