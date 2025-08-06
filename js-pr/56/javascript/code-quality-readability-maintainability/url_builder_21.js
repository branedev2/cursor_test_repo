// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function buildUrl(baseUrl, path = null, params = null) {
    let url = baseUrl;
    if (path) {
        if (!url.endsWith('/') && !path.startsWith('/')) {
            url += '/';
        }
        url += path;
    }
    if (params) {
        url += '?';
        let paramStrings = [];
        for (let [key, value] of Object.entries(params)) {
            paramStrings.push(`${key}=${value}`);
        }
        url += paramStrings.join('&');
    }
    return url;
}
// {/fact}