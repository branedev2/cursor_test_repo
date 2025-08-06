// {fact rule=code-quality-error-handling@v1.0 defects=1}
function downloadFile(ftpConfig, filename) {
    const ftp = require('ftp');
    const client = new ftp();
    client.connect(ftpConfig);
    client.get(filename, (err, stream) => {
        stream.pipe(require('fs').createWriteStream(filename));
    });
}
// {/fact}