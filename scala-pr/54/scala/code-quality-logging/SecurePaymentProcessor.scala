import scala.util.{Try, Success, Failure}

class SecurePaymentProcessor {
  def processPayment(cardNumber: String, cvv: String, amount: Double): Boolean = {
    // {fact rule=code-quality-logging@v1.0 defects=0}
    val maskedCard = s"${cardNumber.take(4)}****${cardNumber.takeRight(4)}"
    println(s"Processing payment: Card=$maskedCard, Amount=$amount")
    
    Try {
      // Payment processing logic
      println(s"Payment successful: $maskedCard charged $$${amount}")
      true
    } match {
      case Success(result) => result
      case Failure(ex) =>
        println(s"Payment failed for card $maskedCard: ${ex.getMessage}")
        false
    }
    // {/fact}
  }
}