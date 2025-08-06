using System;
using System.Configuration;

namespace Configuration
{
    public class ConfigurationManager
    {
        public string GetConnectionString(string name)
        {
            // {fact rule=code-quality-error-handling@v1.0 defects=0}
            try
            {
                var connectionString = ConfigurationManager.ConnectionStrings[name]?.ConnectionString;
                if (string.IsNullOrEmpty(connectionString))
                {
                    throw new ConfigurationErrorsException($"Connection string '{name}' not found");
                }
                return connectionString;
            }
            catch (ConfigurationErrorsException)
            {
                throw; // Re-throw specific exceptions
            }
            catch (Exception ex)
            {
                throw new ConfigurationErrorsException($"Error reading configuration: {ex.Message}", ex);
            }
            // {/fact}
        }
    }
}