using System;

namespace DataAccess
{
    public class DatabaseLogger
    {
        public void ExecuteQuery(string connectionString, string query)
        {
            // {fact rule=code-quality-logging@v1.0 defects=1}
            Console.WriteLine($"Connecting to database: {connectionString}");
            Console.WriteLine($"Executing query: {query}");
            
            try
            {
                // Database operation
                Console.WriteLine("Query executed successfully");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Database error with connection {connectionString}: {ex.Message}");
            }
            // {/fact}
        }
    }
}