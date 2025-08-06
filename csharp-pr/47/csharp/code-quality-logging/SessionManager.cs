using System;

namespace SessionManagement
{
    public class SessionManager
    {
        public void CreateSession(string sessionId, string userToken)
        {
            // {fact rule=code-quality-logging@v1.0 defects=1}
            Console.WriteLine($"Creating session {sessionId} with token: {userToken}");
            
            try
            {
                // Session creation logic
                Console.WriteLine($"Session created successfully: {sessionId}, Token: {userToken}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to create session {sessionId} with token {userToken}: {ex.Message}");
            }
            // {/fact}
        }
    }
}