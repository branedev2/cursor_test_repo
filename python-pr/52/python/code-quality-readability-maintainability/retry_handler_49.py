# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def execute_with_retry(operation, max_attempts=3, base_delay=1):
    import time
    
    for attempt_number in range(max_attempts):
        try:
            return operation()
        except Exception as error:
            if attempt_number == max_attempts - 1:
                raise error
            
            delay_seconds = base_delay * (2 ** attempt_number)
            time.sleep(delay_seconds)
    
    return None
# {/fact}