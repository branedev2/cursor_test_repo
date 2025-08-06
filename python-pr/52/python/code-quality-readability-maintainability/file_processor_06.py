# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def process_file(f):
    try:
        with open(f) as file:
            lines = file.readlines()
            processed = []
            for line in lines:
                if line.strip():
                    words = line.split()
                    filtered_words = [w for w in words if len(w) > 3]
                    if filtered_words:
                        processed.append(' '.join(filtered_words))
            return processed
    except:
        return []
# {/fact}