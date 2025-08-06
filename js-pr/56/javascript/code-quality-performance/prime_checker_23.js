// {fact rule=code-quality-performance@v1.0 defects=1}
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
// {/fact}