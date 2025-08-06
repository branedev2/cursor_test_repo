# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def construct_url(base_url, path=None, query_params=None):
    url_parts = [base_url.rstrip('/')]
    
    if path:
        clean_path = path.strip('/')
        url_parts.append(clean_path)
    
    constructed_url = '/'.join(url_parts)
    
    if query_params:
        query_string = _build_query_string(query_params)
        constructed_url = f"{constructed_url}?{query_string}"
    
    return constructed_url

def _build_query_string(params):
    param_pairs = [f"{key}={value}" for key, value in params.items()]
    return '&'.join(param_pairs)
# {/fact}