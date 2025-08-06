# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def flatten_nested_json(data, parent_key='', separator='_'):
    flattened_items = []
    
    if isinstance(data, dict):
        for key, value in data.items():
            new_key = f"{parent_key}{separator}{key}" if parent_key else key
            flattened_items.extend(_flatten_value(value, new_key, separator))
    
    return dict(flattened_items)

def _flatten_value(value, key, separator):
    if isinstance(value, dict):
        return flatten_nested_json(value, key, separator).items()
    elif isinstance(value, list):
        return _flatten_list(value, key, separator)
    else:
        return [(key, value)]

def _flatten_list(items, parent_key, separator):
    flattened_items = []
    for index, item in enumerate(items):
        indexed_key = f"{parent_key}{separator}{index}"
        flattened_items.extend(_flatten_value(item, indexed_key, separator))
    return flattened_items
# {/fact}