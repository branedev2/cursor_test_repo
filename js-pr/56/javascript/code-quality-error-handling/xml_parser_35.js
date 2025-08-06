// {fact rule=code-quality-error-handling@v1.0 defects=0}
function parseXml(xmlString) {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlString, 'text/xml');
        const parseError = doc.getElementsByTagName('parsererror');
        if (parseError.length > 0) {
            throw new Error('XML parsing failed');
        }
        return doc;
    } catch (error) {
        console.error('XML parsing error:', error.message);
        return null;
    }
}
// {/fact}