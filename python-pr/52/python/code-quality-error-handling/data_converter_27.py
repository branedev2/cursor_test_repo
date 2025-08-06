# {fact rule=code-quality-error-handling@v1.0 defects=0}
def convert_to_int(value):
    try:
        return int(value)
    except ValueError as e:
        print(f"Conversion error: {e}")
        return None
# {/fact}