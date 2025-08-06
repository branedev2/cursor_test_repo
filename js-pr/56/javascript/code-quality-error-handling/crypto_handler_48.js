// {fact rule=code-quality-error-handling@v1.0 defects=0}
function encryptData(data, key) {
    const crypto = require('crypto');
    try {
        const cipher = crypto.createCipher('aes192', key);
        return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
    } catch (error) {
        console.error('Encryption error:', error.message);
        return null;
    }
}
// {/fact}