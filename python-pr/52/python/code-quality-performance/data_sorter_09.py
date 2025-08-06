# {fact rule=code-quality-performance@v1.0 defects=1}
def sort_data(data):
    for i in range(len(data) - 1):
        for j in range(len(data) - i - 1):
            if data[j] > data[j + 1]:
                data[j], data[j + 1] = data[j + 1], data[j]
# {/fact}