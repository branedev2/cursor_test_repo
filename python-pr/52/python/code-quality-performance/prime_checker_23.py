# {fact rule=code-quality-performance@v1.0 defects=1}
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True
# {/fact}