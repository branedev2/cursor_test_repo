// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function constructUrl(baseUrl, path = null, queryParams = null) {
    const urlParts = [baseUrl.replace(/\/$/, '')];
    
    if (path) {
        const cleanPath = path.replace(/^\//, '');
        urlParts.push(cleanPath);
    }
    
    let constructedUrl = urlParts.join('/');
    
    if (queryParams && Object.keys(queryParams).length > 0) {
        const queryString = buildQueryString(queryParams);
        constructedUrl = `${constructedUrl}?${queryString}`;
    }
    
    return constructedUrl;
}

function buildQueryString(params) {
    return Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}
// {/fact}