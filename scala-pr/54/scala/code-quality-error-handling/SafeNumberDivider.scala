import scala.util.Try

class SafeNumberDivider {
  def divide(a: Double, b: Double): Try[Double] = {
    // {fact rule=code-quality-error-handling@v1.0 defects=0}
    Try {
      if (b == 0) {
        throw new ArithmeticException("Division by zero is not allowed")
      }
      a / b
    }
    // {/fact}
  }
}