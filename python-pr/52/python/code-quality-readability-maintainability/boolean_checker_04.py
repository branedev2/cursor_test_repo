# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def check(x):
    return True if x == True else False if x == False else None if x is None else bool(x) if isinstance(x, (int, float)) else False
# {/fact}