# {fact rule=code-quality-naming@v1.0 defects=0}
def process_customer_order(customer_order):
    order_confirmation = customer_order.generate_confirmation()
    return order_confirmation
# {/fact}