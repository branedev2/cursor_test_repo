class NumberDivider {
    fun divide(a: Double, b: Double): Double {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return try {
            if (b == 0.0) return 0.0 // Hiding division by zero
            a / b
        } catch (e: Exception) {
            Double.NaN
        }
        // {/fact}
    }
}