# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def process_numbers(nums):
    result = []
    for n in nums:
        if n % 2 == 0:
            if n > 10:
                if n < 100:
                    result.append(n * 2)
                else:
                    result.append(n / 2)
            else:
                result.append(n + 1)
        else:
            if n > 5:
                result.append(n - 1)
            else:
                result.append(n + 3)
    return result
# {/fact}