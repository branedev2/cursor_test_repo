// {fact rule=code-quality-error-handling@v1.0 defects=0}
function downloadFile(ftpConfig, filename) {
    const ftp = require('ftp');
    return new Promise((resolve, reject) => {
        const client = new ftp();
        client.on('error', (err) => {
            console.error('FTP error:', err.message);
            reject(err);
        });
        client.connect(ftpConfig);
        client.get(filename, (err, stream) => {
            if (err) {
                reject(err);
                return;
            }
            stream.pipe(require('fs').createWriteStream(filename));
            stream.on('end', () => resolve(true));
        });
    });
}
// {/fact}