# {fact rule=code-quality-error-handling@v1.0 defects=0}
def read_file(filename):
    try:
        with open(filename, 'r') as f:
            return f.read()
    except IOError as e:
        print(f"Error reading file {filename}: {e}")
        return None
# {/fact}