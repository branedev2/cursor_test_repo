class NumberDivider {
  def divide(a: Double, b: Double): Double = {
    // {fact rule=code-quality-error-handling@v1.0 defects=1}
    try {
      if (b == 0) return 0.0 // Hiding division by zero
      a / b
    } catch {
      case _: Exception => Double.NaN
    }
    // {/fact}
  }
}