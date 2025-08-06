// {fact rule=code-quality-performance@v1.0 defects=0}
const fibCache = new Map();

function fibonacci(n) {
    if (n <= 1) return n;
    if (fibCache.has(n)) return fibCache.get(n);
    
    const result = fibonacci(n - 1) + fibonacci(n - 2);
    fibCache.set(n, result);
    return result;
}
// {/fact}