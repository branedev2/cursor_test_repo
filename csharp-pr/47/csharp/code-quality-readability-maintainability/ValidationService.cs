using System;

namespace ValidationServices
{
    public class ValidationService
    {
        public bool ValidateUser(string name, string email, int age, string phone)
        {
            // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
            if (name == null || name.Length < 2 || name.Length > 50 || email == null || !email.Contains("@") || email.Length < 5 || age < 18 || age > 120 || phone == null || phone.Length != 10) return false;
            return true;
            // {/fact}
        }
    }
}