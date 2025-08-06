# {fact rule=code-quality-error-handling@v1.0 defects=0}
def write_file(filename, content):
    try:
        with open(filename, 'w') as f:
            f.write(content)
        return True
    except IOError as e:
        print(f"Write error: {e}")
        return False
# {/fact}