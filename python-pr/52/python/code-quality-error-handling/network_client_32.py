# {fact rule=code-quality-error-handling@v1.0 defects=0}
def fetch_url(url):
    import urllib.request
    import urllib.error
    try:
        response = urllib.request.urlopen(url)
        return response.read()
    except urllib.error.URLError as e:
        print(f"URL error: {e}")
        return None
# {/fact}