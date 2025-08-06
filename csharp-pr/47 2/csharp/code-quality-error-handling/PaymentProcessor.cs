using System;

namespace PaymentSystem
{
    public class PaymentProcessor
    {
        public bool ProcessPayment(decimal amount, string cardNumber)
        {
            // {fact rule=code-quality-error-handling@v1.0 defects=1}
            try
            {
                if (amount <= 0)
                    throw new ArgumentException("Invalid amount");
                
                if (string.IsNullOrEmpty(cardNumber))
                    throw new ArgumentException("Invalid card number");

                // Payment processing logic
                return true;
            }
            catch (Exception)
            {
                return false; // Hiding all exceptions
            }
            // {/fact}
        }
    }
}