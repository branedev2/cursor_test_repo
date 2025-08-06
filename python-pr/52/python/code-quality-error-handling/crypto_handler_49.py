# {fact rule=code-quality-error-handling@v1.0 defects=0}
def encrypt_data(data, key):
    try:
        from cryptography.fernet import Fernet
        cipher = Fernet(key)
        return cipher.encrypt(data)
    except Exception as e:
        print(f"Encryption error: {e}")
        return None
# {/fact}