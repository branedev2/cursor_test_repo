# {fact rule=code-quality-error-handling@v1.0 defects=1}
def write_file(filename, content):
    f = open(filename, 'w')
    f.write(content)
    f.close()
# {/fact}