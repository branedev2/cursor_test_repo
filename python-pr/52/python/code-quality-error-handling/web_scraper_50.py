# {fact rule=code-quality-error-handling@v1.0 defects=0}
def scrape_page(url):
    import requests
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        print(f"Request error: {e}")
        return None
# {/fact}