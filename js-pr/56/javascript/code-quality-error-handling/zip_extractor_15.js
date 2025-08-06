// {fact rule=code-quality-error-handling@v1.0 defects=1}
function extractZip(zipFile, extractTo) {
    const AdmZip = require('adm-zip');
    const zip = new AdmZip(zipFile);
    zip.extractAllTo(extractTo);
}
// {/fact}