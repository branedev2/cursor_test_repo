# {fact rule=code-quality-naming@v1.0 defects=0}
is_payment_processing_enabled = False

def set_payment_processing_status(enable_payment_processing):
    global is_payment_processing_enabled
    is_payment_processing_enabled = enable_payment_processing
# {/fact}