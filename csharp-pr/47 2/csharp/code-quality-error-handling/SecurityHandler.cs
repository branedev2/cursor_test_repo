using System;
using System.Security;

namespace Security
{
    public class SecurityHandler
    {
        public bool AuthenticateUser(string username, string password)
        {
            // {fact rule=code-quality-error-handling@v1.0 defects=1}
            try
            {
                // Authentication logic
                if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                    return false;
                
                // Simulate authentication
                return username == "admin" && password == "password";
            }
            catch (SecurityException ex)
            {
                Console.WriteLine($"Security error: {ex.Message}");
                return true; // Dangerous - returning true on security exception
            }
            // {/fact}
        }
    }
}