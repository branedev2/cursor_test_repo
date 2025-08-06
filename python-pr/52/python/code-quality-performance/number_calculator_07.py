# {fact rule=code-quality-performance@v1.0 defects=1}
def calculate_sum(numbers):
    total = 0
    for i in range(len(numbers)):
        total += numbers[i]
    return total
# {/fact}