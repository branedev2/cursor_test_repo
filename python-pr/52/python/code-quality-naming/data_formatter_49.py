# {fact rule=code-quality-naming@v1.0 defects=0}
def transform_customer_data_format(raw_customer_data):
    import re
    normalized_data = re.sub(r'[^a-zA-Z0-9]', '', raw_customer_data)
    return normalized_data
# {/fact}