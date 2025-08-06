// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function organizeFiles(directory) {
    const fs = require('fs');
    let files = fs.readdirSync(directory);
    let organized = {images: [], documents: [], videos: [], others: []};
    for (let file of files) {
        let ext = file.split('.').pop().toLowerCase();
        if (['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(ext)) {
            organized.images.push(file);
        } else if (['pdf', 'doc', 'docx', 'txt', 'rtf'].includes(ext)) {
            organized.documents.push(file);
        } else if (['mp4', 'avi', 'mov', 'wmv', 'flv'].includes(ext)) {
            organized.videos.push(file);
        } else {
            organized.others.push(file);
        }
    }
    return organized;
}
// {/fact}