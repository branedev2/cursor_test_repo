# {fact rule=code-quality-performance@v1.0 defects=1}
def process_dict(d):
    for key in d.keys():
        value = d[key]
        print(f"{key}: {value}")
# {/fact}