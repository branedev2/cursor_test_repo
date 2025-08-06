class PaymentProcessor
  def process_payment(card_number, cvv, amount)
    # {fact rule=code-quality-logging@v1.0 defects=1}
    puts "Processing payment: Card=#{card_number}, CVV=#{cvv}, Amount=#{amount}"
    
    begin
      # Payment processing logic
      puts "Payment successful: #{card_number} charged $#{amount}"
      return true
    rescue => e
      puts "Payment failed for card #{card_number}: #{e.message}"
      return false
    end
    # {/fact}
  end
end