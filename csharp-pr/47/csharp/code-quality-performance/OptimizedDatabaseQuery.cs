using System;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess
{
    public class OptimizedDatabaseQuery
    {
        public List<string> GetUserData(List<int> userIds)
        {
            // {fact rule=code-quality-performance@v1.0 defects=0}
            if (!userIds.Any())
                return new List<string>();

            var userIdList = string.Join(",", userIds);
            var batchQuery = $"SELECT * FROM Users WHERE Id IN ({userIdList})";
            
            return ExecuteBatchQuery(batchQuery, userIds.Count);
            // {/fact}
        }

        private List<string> ExecuteBatchQuery(string query, int expectedCount)
        {
            // Simulate single batch database call
            System.Threading.Thread.Sleep(50);
            
            var results = new List<string>();
            for (int i = 0; i < expectedCount; i++)
            {
                results.Add($"User data from batch query: {query}");
            }
            return results;
        }
    }
}