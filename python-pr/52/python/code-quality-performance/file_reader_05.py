# {fact rule=code-quality-performance@v1.0 defects=1}
def read_file(filename):
    content = ""
    with open(filename, 'r') as f:
        for line in f:
            content += line
    return content
# {/fact}