class ValueCalculator
  def calculate_total(price, quantity, customer_type, has_discount)
    # {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
    total = price * quantity
    total = total * 0.9 if customer_type == 'VIP'
    total = total * 0.95 if customer_type == 'Regular'
    total = total * 0.85 if has_discount
    total = total * 0.98 if total > 1000
    total = total * 0.97 if quantity > 10
    total
    # {/fact}
  end
end