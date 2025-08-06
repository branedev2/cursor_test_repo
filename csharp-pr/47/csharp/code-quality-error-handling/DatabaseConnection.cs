using System;
using System.Data.SqlClient;

namespace DataAccess
{
    public class DatabaseConnection
    {
        private string connectionString = "Server=localhost;Database=TestDB;Trusted_Connection=true;";

        public void ConnectToDatabase()
        {
            // {fact rule=code-quality-error-handling@v1.0 defects=1}
            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    // Database operations
                }
            }
            catch (Exception ex)
            {
                // Empty catch block - swallows exceptions
            }
            // {/fact}
        }
    }
}