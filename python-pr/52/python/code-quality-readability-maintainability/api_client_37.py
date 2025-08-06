# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def make_http_request(url, method='GET', data=None, headers=None):
    import requests
    
    method_handlers = {
        'GET': lambda: requests.get(url, headers=headers),
        'POST': lambda: requests.post(url, json=data, headers=headers),
        'PUT': lambda: requests.put(url, json=data, headers=headers),
        'DELETE': lambda: requests.delete(url, headers=headers)
    }
    
    if method not in method_handlers:
        return None
    
    try:
        response = method_handlers[method]()
        return response.json() if response.status_code == 200 else None
    except requests.RequestException:
        return None
# {/fact}