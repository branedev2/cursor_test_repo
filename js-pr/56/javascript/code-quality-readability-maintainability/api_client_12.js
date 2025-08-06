// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function makeRequest(url, method = 'GET', data = null, headers = null) {
    const axios = require('axios');
    try {
        if (method === 'GET') {
            return axios.get(url, {headers}).then(r => r.status === 200 ? r.data : null);
        } else if (method === 'POST') {
            return axios.post(url, data, {headers}).then(r => r.status === 200 ? r.data : null);
        } else if (method === 'PUT') {
            return axios.put(url, data, {headers}).then(r => r.status === 200 ? r.data : null);
        } else if (method === 'DELETE') {
            return axios.delete(url, {headers}).then(r => r.status === 200 ? r.data : null);
        } else {
            return null;
        }
    } catch (e) {
        return null;
    }
}
// {/fact}