class ValueCalculator {
    fun calculateTotal(price: Double, quantity: Int, customerType: String, hasDiscount: Boolean): Double {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        var total = price * quantity
        if (customerType == "VIP") total *= 0.9
        if (customerType == "Regular") total *= 0.95
        if (hasDiscount) total *= 0.85
        if (total > 1000) total *= 0.98
        if (quantity > 10) total *= 0.97
        return total
        // {/fact}
    }
}