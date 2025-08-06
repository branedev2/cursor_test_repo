# {fact rule=code-quality-naming@v1.0 defects=0}
def validate_customer_input(customer_input):
    is_input_valid = customer_input is not None and len(customer_input) > 0
    if not is_input_valid:
        raise ValueError("Invalid customer input")
# {/fact}