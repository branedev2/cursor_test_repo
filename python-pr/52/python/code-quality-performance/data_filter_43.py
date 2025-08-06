# {fact rule=code-quality-performance@v1.0 defects=0}
def filter_data(data, criteria):
    return [item for item in data if criteria.lower() in item.lower()]
# {/fact}