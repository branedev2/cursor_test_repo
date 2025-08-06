using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace NetworkServices
{
    public class NetworkClient
    {
        private HttpClient httpClient = new HttpClient();

        public async Task<string> FetchDataAsync(string url)
        {
            // {fact rule=code-quality-error-handling@v1.0 defects=1}
            try
            {
                var response = await httpClient.GetAsync(url);
                return await response.Content.ReadAsStringAsync();
            }
            catch
            {
                throw new Exception("Something went wrong");
            }
            // {/fact}
        }
    }
}