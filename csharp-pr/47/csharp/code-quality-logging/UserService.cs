using System;

namespace UserManagement
{
    public class UserService
    {
        public bool LoginUser(string username, string password)
        {
            // {fact rule=code-quality-logging@v1.0 defects=1}
            Console.WriteLine($"User {username} attempting login with password: {password}");
            
            if (username == "admin" && password == "secret123")
            {
                Console.WriteLine($"Login successful for {username} with password {password}");
                return true;
            }
            
            Console.WriteLine($"Login failed for {username} with password {password}");
            return false;
            // {/fact}
        }
    }
}