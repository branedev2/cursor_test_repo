class TaxCalculator {
  // {fact rule=code-quality-naming@v1.0 defects=0}
  def performCalculation(firstOperand: Double, secondOperand: Double, operation: String): Double = {
    operation match {
      case "+" => firstOperand + secondOperand
      case "-" => firstOperand - secondOperand
      case "*" => firstOperand * secondOperand
      case "/" => 
        if (secondOperand != 0) firstOperand / secondOperand 
        else throw new IllegalArgumentException("Division by zero")
      case _ => throw new IllegalArgumentException(s"Unsupported operation: $operation")
    }
  }
  // {/fact}
}