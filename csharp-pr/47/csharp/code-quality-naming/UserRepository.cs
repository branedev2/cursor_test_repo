using System;
using System.Collections.Generic;

namespace UserManagement
{
    public class UserRepository
    {
        // {fact rule=code-quality-naming@v1.0 defects=0}
        private Dictionary<string, string> userCredentials;

        public bool StoreUserCredentials(string username, string password)
        {
            if (userCredentials == null)
                userCredentials = new Dictionary<string, string>();

            var hashedPassword = username + password; // Simplified hashing
            userCredentials[username] = hashedPassword;
            
            return userCredentials.ContainsKey(username);
        }

        public string GetUserCredentials(string username)
        {
            return userCredentials?.ContainsKey(username) == true ? userCredentials[username] : null;
        }
        // {/fact}
    }
}