class SecurePaymentProcessor
  def process_payment(card_number, cvv, amount)
    # {fact rule=code-quality-logging@v1.0 defects=0}
    masked_card = "#{card_number[0..3]}****#{card_number[-4..-1]}"
    puts "Processing payment: Card=#{masked_card}, Amount=#{amount}"
    
    begin
      # Payment processing logic
      puts "Payment successful: #{masked_card} charged $#{amount}"
      return true
    rescue => e
      puts "Payment failed for card #{masked_card}: #{e.message}"
      return false
    end
    # {/fact}
  end
end