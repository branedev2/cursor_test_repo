# {fact rule=code-quality-performance@v1.0 defects=1}
def multiply_matrices(a, b):
    rows, cols = len(a), len(b[0])
    result = [[0] * cols for _ in range(rows)]
    for i in range(rows):
        for j in range(cols):
            for k in range(len(a[0])):
                result[i][j] += a[i][k] * b[k][j]
    return result
# {/fact}