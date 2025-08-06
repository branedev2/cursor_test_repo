class TaxCalculator {
    // {fact rule=code-quality-naming@v1.0 defects=0}
    fun performCalculation(firstOperand: Double, secondOperand: Double, operation: String): Double {
        return when (operation) {
            "+" -> firstOperand + secondOperand
            "-" -> firstOperand - secondOperand
            "*" -> firstOperand * secondOperand
            "/" -> {
                if (secondOperand != 0.0) firstOperand / secondOperand
                else throw IllegalArgumentException("Division by zero")
            }
            else -> throw IllegalArgumentException("Unsupported operation: $operation")
        }
    }
    // {/fact}
}