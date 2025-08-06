# {fact rule=code-quality-error-handling@v1.0 defects=1}
def start_thread(target_function):
    import threading
    thread = threading.Thread(target=target_function)
    thread.start()
    thread.join()
# {/fact}