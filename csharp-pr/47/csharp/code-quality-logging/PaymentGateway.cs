using System;

namespace PaymentServices
{
    public class PaymentGateway
    {
        public void ProcessCreditCard(string cardNumber, string cvv, decimal amount)
        {
            // {fact rule=code-quality-logging@v1.0 defects=1}
            Console.WriteLine($"Processing payment: Card={cardNumber}, CVV={cvv}, Amount={amount}");
            
            try
            {
                // Payment processing
                Console.WriteLine($"Payment successful: {cardNumber} charged ${amount}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Payment failed for card {cardNumber}: {ex.Message}");
            }
            // {/fact}
        }
    }
}