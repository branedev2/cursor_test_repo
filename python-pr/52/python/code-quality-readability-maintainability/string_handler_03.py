# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def handle_string(s):
    return s.replace('a','b').replace('b','c').replace('c','d').replace('d','e').replace('e','f').upper().lower().strip().split(' ')[0] if s else 
# {/fact}