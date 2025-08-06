class Calculator {
  // {fact rule=code-quality-naming@v1.0 defects=1}
  def calc(a: Double, b: Double, op: String): Double = {
    op match {
      case "+" => a + b
      case "-" => a - b
      case "*" => a * b
      case "/" => if (b != 0) a / b else 0
      case _ => 0
    }
  }
  // {/fact}
}