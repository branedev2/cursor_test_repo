// {fact rule=code-quality-error-handling@v1.0 defects=1}
function parseXml(xmlString) {
    const parser = new DOMParser();
    return parser.parseFromString(xmlString, 'text/xml');
}
// {/fact}