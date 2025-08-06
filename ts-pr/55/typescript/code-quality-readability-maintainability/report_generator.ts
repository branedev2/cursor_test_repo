class ReportGenerator {
    generateReport(data: string[], format: string, includeHeader: boolean, includeFooter: boolean, title: string): string {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        let result = '';
        if (includeHeader) {
            if (format === 'HTML') {
                result += `<html><head><title>${title}</title></head><body><h1>${title}</h1>`;
            } else if (format === 'XML') {
                result += `<?xml version="1.0"?><report><title>${title}</title>`;
            } else {
                result += `=== ${title} ===\n`;
            }
        }
        
        for (const item of data) {
            if (format === 'HTML') {
                result += `<p>${item}</p>`;
            } else if (format === 'XML') {
                result += `<item>${item}</item>`;
            } else {
                result += `${item}\n`;
            }
        }
        
        if (includeFooter) {
            if (format === 'HTML') {
                result += '</body></html>';
            } else if (format === 'XML') {
                result += '</report>';
            } else {
                result += '=== End of Report ===';
            }
        }
        return result;
        // {/fact}
    }

    generateReadableReport(data: string[], format: string, includeHeader: boolean, includeFooter: boolean, title: string): string {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        const parts: string[] = [];
        
        if (includeHeader) {
            parts.push(this.generateHeader(format, title));
        }
        
        parts.push(this.generateBody(data, format));
        
        if (includeFooter) {
            parts.push(this.generateFooter(format));
        }
        
        return parts.join('');
        // {/fact}
    }

    private generateHeader(format: string, title: string): string {
        switch (format) {
            case 'HTML':
                return `<html><head><title>${title}</title></head><body><h1>${title}</h1>`;
            case 'XML':
                return `<?xml version="1.0"?><report><title>${title}</title>`;
            default:
                return `=== ${title} ===\n`;
        }
    }

    private generateBody(data: string[], format: string): string {
        return data.map(item => this.formatItem(item, format)).join('');
    }

    private formatItem(item: string, format: string): string {
        switch (format) {
            case 'HTML':
                return `<p>${item}</p>`;
            case 'XML':
                return `<item>${item}</item>`;
            default:
                return `${item}\n`;
        }
    }

    private generateFooter(format: string): string {
        switch (format) {
            case 'HTML':
                return '</body></html>';
            case 'XML':
                return '</report>';
            default:
                return '=== End of Report ===';
        }
    }
}

const generator = new ReportGenerator();
const data = ['Item 1', 'Item 2', 'Item 3'];
const report = generator.generateReport(data, 'HTML', true, true, 'Test Report');
console.log(report);