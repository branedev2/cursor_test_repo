# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def transform_dictionary_data(data_list):
    transformed_data = []
    
    for item in data_list:
        if not isinstance(item, dict):
            continue
        
        transformed_item = {}
        for key, value in item.items():
            normalized_key = key.lower()
            transformed_value = _transform_value(value)
            transformed_item[normalized_key] = transformed_value
        
        transformed_data.append(transformed_item)
    
    return transformed_data

def _transform_value(value):
    if isinstance(value, str):
        return value.strip().title()
    elif isinstance(value, (int, float)):
        return value * 1.1
    else:
        return value
# {/fact}