class PaymentProcessor {
    fun processPayment(cardNumber: String, cvv: String, amount: Double): Boolean {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        println("Processing payment: Card=$cardNumber, CVV=$cvv, Amount=$amount")
        
        return try {
            // Payment processing logic
            println("Payment successful: $cardNumber charged $$amount")
            true
        } catch (ex: Exception) {
            println("Payment failed for card $cardNumber: ${ex.message}")
            false
        }
        // {/fact}
    }
}