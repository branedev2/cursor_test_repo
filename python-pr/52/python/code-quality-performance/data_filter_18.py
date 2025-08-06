# {fact rule=code-quality-performance@v1.0 defects=1}
def filter_data(data, criteria):
    filtered = []
    for item in data:
        if criteria.lower() in item.lower():
            filtered.append(item)
    return filtered
# {/fact}