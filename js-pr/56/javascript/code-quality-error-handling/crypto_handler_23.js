// {fact rule=code-quality-error-handling@v1.0 defects=1}
function encryptData(data, key) {
    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes192', key);
    return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
}
// {/fact}