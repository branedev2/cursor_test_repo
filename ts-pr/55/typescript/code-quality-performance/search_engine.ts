class SearchEngine {
    private documents: string[] = [];
    private index: Map<string, number[]> = new Map();

    addDocument(doc: string): void {
        this.documents.push(doc);
    }

    searchDocuments(query: string): string[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const results: string[] = [];
        for (const doc of this.documents) {
            if (doc.includes(query)) {
                results.push(doc);
            }
        }
        return results;
        // {/fact}
    }

    optimizedSearchDocuments(query: string): string[] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return this.documents.filter(doc => doc.includes(query));
        // {/fact}
    }

    hasDocument(doc: string): boolean {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (const document of this.documents) {
            if (document === doc) {
                return true;
            }
        }
        return false;
        // {/fact}
    }

    efficientHasDocument(doc: string): boolean {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return this.documents.includes(doc);
        // {/fact}
    }

    searchMultipleQueries(queries: string[]): string[] {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        const allResults: string[] = [];
        for (const query of queries) {
            for (const doc of this.documents) {
                if (doc.includes(query) && !allResults.includes(doc)) {
                    allResults.push(doc);
                }
            }
        }
        return allResults;
        // {/fact}
    }

    efficientSearchMultipleQueries(queries: string[]): string[] {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        const resultSet = new Set<string>();
        for (const query of queries) {
            this.documents
                .filter(doc => doc.includes(query))
                .forEach(doc => resultSet.add(doc));
        }
        return Array.from(resultSet);
        // {/fact}
    }

    countOccurrences(query: string): number {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        let count = 0;
        for (const doc of this.documents) {
            const matches = doc.split(query);
            count += matches.length - 1;
        }
        return count;
        // {/fact}
    }
}

const engine = new SearchEngine();
engine.addDocument('This is a test document');
engine.addDocument('Another document for testing');
const results = engine.searchDocuments('test');
console.log(`Found ${results.length} documents`);