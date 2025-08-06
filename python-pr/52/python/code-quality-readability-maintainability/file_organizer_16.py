# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def organize_files(directory):
    import os
    files = os.listdir(directory)
    organized = {'images': [], 'documents': [], 'videos': [], 'others': []}
    for file in files:
        ext = file.split('.')[-1].lower()
        if ext in ['jpg', 'jpeg', 'png', 'gif', 'bmp']:
            organized['images'].append(file)
        elif ext in ['pdf', 'doc', 'docx', 'txt', 'rtf']:
            organized['documents'].append(file)
        elif ext in ['mp4', 'avi', 'mov', 'wmv', 'flv']:
            organized['videos'].append(file)
        else:
            organized['others'].append(file)
    return organized
# {/fact}