// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
async function makeHttpRequest(url, method = 'GET', data = null, headers = null) {
    const axios = require('axios');
    
    const requestConfig = { headers };
    if (data) {
        requestConfig.data = data;
    }
    
    try {
        const response = await executeRequest(method, url, requestConfig);
        return response.status === 200 ? response.data : null;
    } catch (error) {
        console.error('HTTP request failed:', error.message);
        return null;
    }
}

function executeRequest(method, url, config) {
    const methodHandlers = {
        'GET': () => axios.get(url, config),
        'POST': () => axios.post(url, config.data, config),
        'PUT': () => axios.put(url, config.data, config),
        'DELETE': () => axios.delete(url, config)
    };
    
    const handler = methodHandlers[method.toUpperCase()];
    return handler ? handler() : Promise.reject(new Error('Unsupported method'));
}
// {/fact}