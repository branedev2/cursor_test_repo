# {fact rule=code-quality-naming@v1.0 defects=0}
active_user_session_count = 0

def increment_active_session_count():
    global active_user_session_count
    active_user_session_count += 1
# {/fact}