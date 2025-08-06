# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def calculate_complex_formula(a, b, c, d, e, f, g, h, i, j):
    if not all([a, b, c, d, e, f, g, h, i, j]):
        return 0
    
    term1 = a + b * c
    term2 = d / e if e != 0 else 0
    term3 = f * g
    term4 = h + i * j
    
    return term1 - term2 + term3 - term4
# {/fact}