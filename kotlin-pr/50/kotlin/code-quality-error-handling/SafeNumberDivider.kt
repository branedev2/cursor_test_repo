class SafeNumberDivider {
    fun divide(a: Double, b: Double): Result<Double> {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        return if (b == 0.0) {
            Result.failure(ArithmeticException("Division by zero is not allowed"))
        } else {
            Result.success(a / b)
        }
        // {/fact}
    }
}