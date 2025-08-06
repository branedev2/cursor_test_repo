import scala.util.{Try, Success, Failure}

class PaymentProcessor {
  def processPayment(cardNumber: String, cvv: String, amount: Double): Boolean = {
    // {fact rule=code-quality-logging@v1.0 defects=1}
    println(s"Processing payment: Card=$cardNumber, CVV=$cvv, Amount=$amount")
    
    Try {
      // Payment processing logic
      println(s"Payment successful: $cardNumber charged $$${amount}")
      true
    } match {
      case Success(result) => result
      case Failure(ex) =>
        println(s"Payment failed for card $cardNumber: ${ex.getMessage}")
        false
    }
    // {/fact}
  }
}