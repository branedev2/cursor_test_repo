# {fact rule=code-quality-error-handling@v1.0 defects=0}
def start_thread(target_function):
    import threading
    try:
        thread = threading.Thread(target=target_function)
        thread.start()
        thread.join()
        return True
    except Exception as e:
        print(f"Thread error: {e}")
        return False
# {/fact}