// {fact rule=code-quality-performance@v1.0 defects=1}
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// {/fact}