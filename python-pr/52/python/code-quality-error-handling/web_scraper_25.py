# {fact rule=code-quality-error-handling@v1.0 defects=1}
def scrape_page(url):
    import requests
    response = requests.get(url)
    return response.text
# {/fact}