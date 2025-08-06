# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def process_data(data):
    if not data:
        return data
    
    processed_data = []
    for item in data:
        if item and isinstance(item, str) and len(item) > 5:
            processed_data.append(item[:5])
        else:
            processed_data.append(item)
    
    return processed_data
# {/fact}