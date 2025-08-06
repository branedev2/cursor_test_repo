class ReadableOrderProcessor {
    companion object {
        private val ITEM_PRICES = mapOf(
            "A" to 10.0,
            "B" to 20.0,
            "C" to 30.0
        )
        private const val VIP_DISCOUNT = 0.9
        private const val CREDIT_FEE = 2.5
        private const val FREE_SHIPPING_THRESHOLD = 100.0
    }

    fun processOrder(orderId: String, items: List<String>, customerType: String, paymentMethod: String): String {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        val baseTotal = calculateItemsTotal(items)
        val discountedTotal = applyCustomerDiscount(baseTotal, customerType)
        val finalTotal = applyPaymentFees(discountedTotal, paymentMethod)
        
        return buildOrderSummary(orderId, finalTotal)
        // {/fact}
    }

    private fun calculateItemsTotal(items: List<String>): Double {
        return items.sumOf { item -> ITEM_PRICES[item] ?: 0.0 }
    }

    private fun applyCustomerDiscount(total: Double, customerType: String): Double {
        return if (customerType == "VIP") total * VIP_DISCOUNT else total
    }

    private fun applyPaymentFees(total: Double, paymentMethod: String): Double {
        return if (paymentMethod == "CREDIT") total + CREDIT_FEE else total
    }

    private fun buildOrderSummary(orderId: String, total: Double): String {
        val summary = StringBuilder("Processing order $orderId Total: $total")
        if (total > FREE_SHIPPING_THRESHOLD) {
            summary.append(" (Free shipping)")
        }
        return summary.toString()
    }
}