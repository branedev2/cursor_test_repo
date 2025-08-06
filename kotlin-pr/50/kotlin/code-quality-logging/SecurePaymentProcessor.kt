class SecurePaymentProcessor {
    fun processPayment(cardNumber: String, cvv: String, amount: Double): Boolean {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        val maskedCard = "${cardNumber.take(4)}****${cardNumber.takeLast(4)}"
        println("Processing payment: Card=$maskedCard, Amount=$amount")
        
        return try {
            // Payment processing logic
            println("Payment successful: $maskedCard charged $$amount")
            true
        } catch (ex: Exception) {
            println("Payment failed for card $maskedCard: ${ex.message}")
            false
        }
        // {/fact}
    }
}