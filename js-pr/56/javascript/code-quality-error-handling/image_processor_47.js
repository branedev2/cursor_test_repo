// {fact rule=code-quality-error-handling@v1.0 defects=0}
async function resizeImage(imagePath, width, height) {
    const sharp = require('sharp');
    try {
        return await sharp(imagePath).resize(width, height).toBuffer();
    } catch (error) {
        console.error('Image processing error:', error.message);
        return null;
    }
}
// {/fact}