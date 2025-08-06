<?php

class SecurePaymentProcessor
{
    public function processPayment($cardNumber, $cvv, $amount)
    {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        $maskedCard = substr($cardNumber, 0, 4) . '****' . substr($cardNumber, -4);
        error_log("Processing payment: Card={$maskedCard}, Amount={$amount}");
        
        try {
            // Payment processing logic
            error_log("Payment successful: {$maskedCard} charged \${$amount}");
            return true;
        } catch (Exception $e) {
            error_log("Payment failed for card {$maskedCard}: " . $e->getMessage());
            return false;
        }
        // {/fact}
    }
}