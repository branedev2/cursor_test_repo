class OrderProcessor {
    fun processOrder(orderId: String, items: List<String>, customerType: String, paymentMethod: String): String {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        var result = "Processing order $orderId"
        var total = 0.0
        items.forEach { item ->
            val price = when (item) {
                "A" -> 10.0
                "B" -> 20.0
                "C" -> 30.0
                else -> 0.0
            }
            total += price
        }
        if (customerType == "VIP") total *= 0.9
        if (paymentMethod == "CREDIT") total += 2.5
        result += " Total: $total"
        if (total > 100) result += " (Free shipping)"
        return result
        // {/fact}
    }
}