# {fact rule=code-quality-performance@v1.0 defects=1}
def process_numbers(numbers):
    result = []
    for num in numbers:
        if num % 2 == 0:
            result.append(num * 2)
    return result
# {/fact}