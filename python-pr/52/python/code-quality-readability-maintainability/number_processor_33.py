# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def process_number_list(numbers):
    processed_numbers = []
    
    for number in numbers:
        if number % 2 == 0:  # Even numbers
            processed_numbers.append(
                number * 2 if 10 < number < 100 else number / 2 if number >= 100 else number + 1
            )
        else:  # Odd numbers
            processed_numbers.append(
                number - 1 if number > 5 else number + 3
            )
    
    return processed_numbers
# {/fact}