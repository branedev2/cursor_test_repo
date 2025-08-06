# {fact rule=code-quality-performance@v1.0 defects=1}
def reverse_string(s):
    reversed_str = ""
    for i in range(len(s) - 1, -1, -1):
        reversed_str += s[i]
    return reversed_str
# {/fact}