# {fact rule=code-quality-performance@v1.0 defects=0}
def process_array(array):
    for i in range(len(array)):
        for j in range(i + 1, len(array)):
            print(array[i] + array[j])
# {/fact}