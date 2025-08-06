# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def flatten_json(data, parent_key='', sep='_'):
    items = []
    if isinstance(data, dict):
        for k, v in data.items():
            new_key = f"{parent_key}{sep}{k}" if parent_key else k
            if isinstance(v, dict):
                items.extend(flatten_json(v, new_key, sep).items())
            elif isinstance(v, list):
                for i, item in enumerate(v):
                    items.extend(flatten_json(item, f"{new_key}{sep}{i}", sep).items())
            else:
                items.append((new_key, v))
    return dict(items)
# {/fact}