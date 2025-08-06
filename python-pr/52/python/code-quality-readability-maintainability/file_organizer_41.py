# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def categorize_files_by_extension(directory):
    import os
    
    file_categories = {
        'images': ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
        'documents': ['pdf', 'doc', 'docx', 'txt', 'rtf'],
        'videos': ['mp4', 'avi', 'mov', 'wmv', 'flv']
    }
    
    categorized_files = {category: [] for category in file_categories}
    categorized_files['others'] = []
    
    files = os.listdir(directory)
    
    for filename in files:
        file_extension = filename.split('.')[-1].lower()
        category = _get_file_category(file_extension, file_categories)
        categorized_files[category].append(filename)
    
    return categorized_files

def _get_file_category(extension, categories):
    for category, extensions in categories.items():
        if extension in extensions:
            return category
    return 'others'
# {/fact}