# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def transform_data(data):
    transformed = []
    for item in data:
        if isinstance(item, dict):
            new_item = {}
            for key, value in item.items():
                if isinstance(value, str):
                    new_item[key.lower()] = value.strip().title()
                elif isinstance(value, (int, float)):
                    new_item[key.lower()] = value * 1.1
                else:
                    new_item[key.lower()] = value
            transformed.append(new_item)
    return transformed
# {/fact}