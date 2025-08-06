using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace ApiServices
{
    public class ApiClient
    {
        private readonly HttpClient httpClient;

        public ApiClient()
        {
            httpClient = new HttpClient();
        }

        public async Task<string> GetDataAsync(string endpoint)
        {
            // {fact rule=code-quality-error-handling@v1.0 defects=0}
            try
            {
                var response = await httpClient.GetAsync(endpoint);
                response.EnsureSuccessStatusCode();
                return await response.Content.ReadAsStringAsync();
            }
            catch (HttpRequestException ex)
            {
                throw new InvalidOperationException($"Failed to fetch data from {endpoint}", ex);
            }
            catch (TaskCanceledException ex)
            {
                throw new TimeoutException("Request timed out", ex);
            }
            // {/fact}
        }
    }
}