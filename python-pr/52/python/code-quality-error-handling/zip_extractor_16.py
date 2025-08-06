# {fact rule=code-quality-error-handling@v1.0 defects=1}
def extract_zip(zip_file, extract_to):
    import zipfile
    with zipfile.ZipFile(zip_file, 'r') as zip_ref:
        zip_ref.extractall(extract_to)
# {/fact}