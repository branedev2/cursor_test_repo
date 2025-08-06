# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def build_url(base_url, path=None, params=None):
    url = base_url
    if path:
        if not url.endswith('/') and not path.startswith('/'):
            url += '/'
        url += path
    if params:
        url += '?'
        param_strings = []
        for key, value in params.items():
            param_strings.append(f"{key}={value}")
        url += '&'.join(param_strings)
    return url
# {/fact}