class ReadableValueCalculator {
    companion object {
        private const val VIP_DISCOUNT = 0.9
        private const val REGULAR_DISCOUNT = 0.95
        private const val ADDITIONAL_DISCOUNT = 0.85
        private const val LARGE_ORDER_DISCOUNT = 0.98
        private const val BULK_QUANTITY_DISCOUNT = 0.97
        private const val LARGE_ORDER_THRESHOLD = 1000
        private const val BULK_QUANTITY_THRESHOLD = 10
    }

    fun calculateTotal(price: Double, quantity: Int, customerType: String, hasDiscount: Boolean): Double {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        val baseTotal = price * quantity
        
        val customerDiscount = getCustomerTypeDiscount(customerType)
        var total = baseTotal * customerDiscount
        
        if (hasDiscount) total *= ADDITIONAL_DISCOUNT
        
        return applyVolumeDiscounts(total, quantity)
        // {/fact}
    }

    private fun getCustomerTypeDiscount(customerType: String): Double {
        return when (customerType) {
            "VIP" -> VIP_DISCOUNT
            "Regular" -> REGULAR_DISCOUNT
            else -> 1.0
        }
    }

    private fun applyVolumeDiscounts(total: Double, quantity: Int): Double {
        var discountedTotal = total
        if (discountedTotal > LARGE_ORDER_THRESHOLD) discountedTotal *= LARGE_ORDER_DISCOUNT
        if (quantity > BULK_QUANTITY_THRESHOLD) discountedTotal *= BULK_QUANTITY_DISCOUNT
        return discountedTotal
    }
}