# {fact rule=code-quality-error-handling@v1.0 defects=1}
def read_csv(filename):
    import csv
    f = open(filename, 'r')
    reader = csv.reader(f)
    data = list(reader)
    f.close()
    return data
# {/fact}