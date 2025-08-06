# {fact rule=code-quality-naming@v1.0 defects=0}
is_user_logged_in = False

def check_user_authentication_status():
    if is_user_logged_in:
        print("User is authenticated")
# {/fact}