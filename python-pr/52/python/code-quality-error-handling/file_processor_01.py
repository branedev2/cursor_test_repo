# {fact rule=code-quality-error-handling@v1.0 defects=1}
def read_file(filename):
    f = open(filename, 'r')
    content = f.read()
    f.close()
    return content
# {/fact}