using System;

namespace DataValidation
{
    public class DataValidator
    {
        public bool ValidateInput(string input)
        {
            // {fact rule=code-quality-error-handling@v1.0 defects=0}
            if (input == null)
            {
                throw new ArgumentNullException(nameof(input), "Input cannot be null");
            }

            if (string.IsNullOrWhiteSpace(input))
            {
                throw new ArgumentException("Input cannot be empty or whitespace", nameof(input));
            }

            try
            {
                // Validation logic
                return input.Length > 5;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Validation failed", ex);
            }
            // {/fact}
        }
    }
}