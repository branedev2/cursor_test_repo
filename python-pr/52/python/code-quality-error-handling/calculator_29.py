# {fact rule=code-quality-error-handling@v1.0 defects=0}
def divide(a, b):
    try:
        if b == 0:
            raise ValueError("Division by zero")
        return a / b
    except ValueError as e:
        print(f"Calculation error: {e}")
        return None
# {/fact}