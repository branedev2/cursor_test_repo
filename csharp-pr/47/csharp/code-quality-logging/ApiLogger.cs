using System;

namespace ApiServices
{
    public class ApiLogger
    {
        public void LogApiRequest(string endpoint, string apiKey, string requestBody)
        {
            // {fact rule=code-quality-logging@v1.0 defects=1}
            Console.WriteLine($"API Request to {endpoint}");
            Console.WriteLine($"API Key: {apiKey}");
            Console.WriteLine($"Request Body: {requestBody}");
            
            try
            {
                // API call logic
                Console.WriteLine($"API call successful to {endpoint} with key {apiKey}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"API call failed: {endpoint}, Key: {apiKey}, Error: {ex.Message}");
            }
            // {/fact}
        }
    }
}