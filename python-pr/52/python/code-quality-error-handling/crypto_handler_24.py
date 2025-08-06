# {fact rule=code-quality-error-handling@v1.0 defects=1}
def encrypt_data(data, key):
    from cryptography.fernet import Fernet
    cipher = Fernet(key)
    return cipher.encrypt(data)
# {/fact}