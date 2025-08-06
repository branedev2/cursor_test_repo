using System;
using System.Collections.Generic;

namespace DataAccess
{
    public class DatabaseQuery
    {
        public List<string> GetUserData(List<int> userIds)
        {
            // {fact rule=code-quality-performance@v1.0 defects=1}
            var results = new List<string>();
            
            foreach (var userId in userIds)
            {
                // Simulating individual database calls
                var userData = ExecuteQuery($"SELECT * FROM Users WHERE Id = {userId}");
                results.Add(userData);
            }
            
            return results;
            // {/fact}
        }

        private string ExecuteQuery(string query)
        {
            // Simulate database call
            System.Threading.Thread.Sleep(10);
            return $"User data for query: {query}";
        }
    }
}