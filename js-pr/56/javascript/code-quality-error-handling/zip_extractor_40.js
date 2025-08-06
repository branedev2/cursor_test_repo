// {fact rule=code-quality-error-handling@v1.0 defects=0}
function extractZip(zipFile, extractTo) {
    try {
        const AdmZip = require('adm-zip');
        const zip = new AdmZip(zipFile);
        zip.extractAllTo(extractTo);
        return true;
    } catch (error) {
        console.error('Zip extraction error:', error.message);
        return false;
    }
}
// {/fact}