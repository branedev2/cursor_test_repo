using System;

namespace ValidationServices
{
    public class ImprovedValidationService
    {
        private const int MinNameLength = 2;
        private const int MaxNameLength = 50;
        private const int MinAge = 18;
        private const int MaxAge = 120;
        private const int PhoneNumberLength = 10;
        private const int MinEmailLength = 5;

        public bool ValidateUser(string name, string email, int age, string phone)
        {
            // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
            return IsValidName(name) && 
                   IsValidEmail(email) && 
                   IsValidAge(age) && 
                   IsValidPhone(phone);
            // {/fact}
        }

        private bool IsValidName(string name)
        {
            return !string.IsNullOrEmpty(name) && 
                   name.Length >= MinNameLength && 
                   name.Length <= MaxNameLength;
        }

        private bool IsValidEmail(string email)
        {
            return !string.IsNullOrEmpty(email) && 
                   email.Contains("@") && 
                   email.Length >= MinEmailLength;
        }

        private bool IsValidAge(int age)
        {
            return age >= MinAge && age <= MaxAge;
        }

        private bool IsValidPhone(string phone)
        {
            return !string.IsNullOrEmpty(phone) && 
                   phone.Length == PhoneNumberLength;
        }
    }
}