# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def make_request(url, method='GET', data=None, headers=None):
    import requests
    try:
        if method == 'GET':
            response = requests.get(url, headers=headers)
        elif method == 'POST':
            response = requests.post(url, json=data, headers=headers)
        elif method == 'PUT':
            response = requests.put(url, json=data, headers=headers)
        elif method == 'DELETE':
            response = requests.delete(url, headers=headers)
        else:
            return None
        return response.json() if response.status_code == 200 else None
    except:
        return None
# {/fact}