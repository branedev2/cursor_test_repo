<?php

class PaymentProcessor
{
    public function processPayment($cardNumber, $cvv, $amount)
    {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        error_log("Processing payment: Card={$cardNumber}, CVV={$cvv}, Amount={$amount}");
        
        try {
            // Payment processing logic
            error_log("Payment successful: {$cardNumber} charged \${$amount}");
            return true;
        } catch (Exception $e) {
            error_log("Payment failed for card {$cardNumber}: " . $e->getMessage());
            return false;
        }
        // {/fact}
    }
}