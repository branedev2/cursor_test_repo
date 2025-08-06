# {fact rule=code-quality-error-handling@v1.0 defects=0}
def read_csv(filename):
    import csv
    try:
        with open(filename, 'r') as f:
            reader = csv.reader(f)
            return list(reader)
    except (IOError, csv.Error) as e:
        print(f"CSV error: {e}")
        return None
# {/fact}