# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def retry_operation(operation, max_retries=3, delay=1):
    import time
    for attempt in range(max_retries):
        try:
            return operation()
        except Exception as e:
            if attempt == max_retries - 1:
                raise e
            time.sleep(delay * (2 ** attempt))
    return None
# {/fact}