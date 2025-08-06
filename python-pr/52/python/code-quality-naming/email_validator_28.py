# {fact rule=code-quality-naming@v1.0 defects=0}
user_email_address = ""

def validate_email_format():
    is_valid_email = "@" in user_email_address
    return is_valid_email
# {/fact}