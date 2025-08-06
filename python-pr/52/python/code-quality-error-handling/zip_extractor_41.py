# {fact rule=code-quality-error-handling@v1.0 defects=0}
def extract_zip(zip_file, extract_to):
    import zipfile
    try:
        with zipfile.ZipFile(zip_file, 'r') as zip_ref:
            zip_ref.extractall(extract_to)
        return True
    except zipfile.BadZipFile as e:
        print(f"Zip error: {e}")
        return False
# {/fact}