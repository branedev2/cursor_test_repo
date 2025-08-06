class ReadableValueCalculator
  VIP_DISCOUNT = 0.9
  REGULAR_DISCOUNT = 0.95
  ADDITIONAL_DISCOUNT = 0.85
  LARGE_ORDER_DISCOUNT = 0.98
  BULK_QUANTITY_DISCOUNT = 0.97
  LARGE_ORDER_THRESHOLD = 1000
  BULK_QUANTITY_THRESHOLD = 10

  def calculate_total(price, quantity, customer_type, has_discount)
    # {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
    base_total = price * quantity
    
    customer_discount = get_customer_type_discount(customer_type)
    total = base_total * customer_discount
    
    total *= ADDITIONAL_DISCOUNT if has_discount
    
    apply_volume_discounts(total, quantity)
    # {/fact}
  end

  private

  def get_customer_type_discount(customer_type)
    case customer_type
    when 'VIP'
      VIP_DISCOUNT
    when 'Regular'
      REGULAR_DISCOUNT
    else
      1.0
    end
  end

  def apply_volume_discounts(total, quantity)
    total *= LARGE_ORDER_DISCOUNT if total > LARGE_ORDER_THRESHOLD
    total *= BULK_QUANTITY_DISCOUNT if quantity > BULK_QUANTITY_THRESHOLD
    total
  end
end