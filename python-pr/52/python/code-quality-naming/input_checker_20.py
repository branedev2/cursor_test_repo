# {fact rule=code-quality-naming@v1.0 defects=1}
def validate(input):
    ok = input is not None
    if not ok:
        raise ValueError()
# {/fact}