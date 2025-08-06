# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def process(d):
    if d:
        if len(d) > 0:
            for i in range(len(d)):
                if d[i]:
                    if isinstance(d[i], str):
                        if len(d[i]) > 5:
                            d[i] = d[i][:5]
    return d
# {/fact}