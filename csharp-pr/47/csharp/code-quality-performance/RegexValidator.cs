using System;
using System.Text.RegularExpressions;

namespace Validation
{
    public class RegexValidator
    {
        public bool ValidateEmail(string email)
        {
            // {fact rule=code-quality-performance@v1.0 defects=1}
            var pattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
            var regex = new Regex(pattern);
            return regex.IsMatch(email);
            // {/fact}
        }

        public bool ValidatePhone(string phone)
        {
            var pattern = @"^\d{3}-\d{3}-\d{4}$";
            var regex = new Regex(pattern);
            return regex.IsMatch(phone);
        }
    }
}