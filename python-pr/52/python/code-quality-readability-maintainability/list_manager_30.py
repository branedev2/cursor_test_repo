# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def transform_list_items(items):
    transformed_items = []
    
    for item in items:
        if not item:
            continue
            
        if isinstance(item, str):
            transformed_items.append(item.upper())
        elif isinstance(item, int):
            transformed_items.append(item * 2)
        elif isinstance(item, float):
            transformed_items.append(round(item, 2))
        else:
            transformed_items.append(str(item))
    
    return transformed_items
# {/fact}