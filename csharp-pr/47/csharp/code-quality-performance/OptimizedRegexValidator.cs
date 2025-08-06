using System;
using System.Text.RegularExpressions;

namespace Validation
{
    public class OptimizedRegexValidator
    {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        private static readonly Regex EmailRegex = new Regex(
            @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", 
            RegexOptions.Compiled);
            
        private static readonly Regex PhoneRegex = new Regex(
            @"^\d{3}-\d{3}-\d{4}$", 
            RegexOptions.Compiled);

        public bool ValidateEmail(string email)
        {
            return EmailRegex.IsMatch(email);
        }

        public bool ValidatePhone(string phone)
        {
            return PhoneRegex.IsMatch(phone);
        }
        // {/fact}
    }
}