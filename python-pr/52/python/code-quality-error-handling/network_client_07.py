# {fact rule=code-quality-error-handling@v1.0 defects=1}
def fetch_url(url):
    import urllib.request
    response = urllib.request.urlopen(url)
    return response.read()
# {/fact}