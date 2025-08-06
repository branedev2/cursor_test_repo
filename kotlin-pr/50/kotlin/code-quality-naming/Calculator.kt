class Calculator {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    fun calc(a: Double, b: Double, op: String): Double {
        return when (op) {
            "+" -> a + b
            "-" -> a - b
            "*" -> a * b
            "/" -> if (b != 0.0) a / b else 0.0
            else -> 0.0
        }
    }
    // {/fact}
}