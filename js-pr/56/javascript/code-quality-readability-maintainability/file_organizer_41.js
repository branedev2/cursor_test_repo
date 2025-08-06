// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function categorizeFilesByExtension(directory) {
    const fs = require('fs');
    
    const fileCategories = {
        images: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
        documents: ['pdf', 'doc', 'docx', 'txt', 'rtf'],
        videos: ['mp4', 'avi', 'mov', 'wmv', 'flv']
    };
    
    const categorizedFiles = {
        images: [],
        documents: [],
        videos: [],
        others: []
    };
    
    try {
        const files = fs.readdirSync(directory);
        
        files.forEach(filename => {
            const extension = getFileExtension(filename);
            const category = determineFileCategory(extension, fileCategories);
            categorizedFiles[category].push(filename);
        });
        
        return categorizedFiles;
    } catch (error) {
        console.error('Error organizing files:', error.message);
        return categorizedFiles;
    }
}

function getFileExtension(filename) {
    return filename.split('.').pop().toLowerCase();
}

function determineFileCategory(extension, categories) {
    for (const [category, extensions] of Object.entries(categories)) {
        if (extensions.includes(extension)) {
            return category;
        }
    }
    return 'others';
}
// {/fact}