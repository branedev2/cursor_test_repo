// {fact rule=code-quality-error-handling@v1.0 defects=1}
function resizeImage(imagePath, width, height) {
    const sharp = require('sharp');
    return sharp(imagePath).resize(width, height);
}
// {/fact}