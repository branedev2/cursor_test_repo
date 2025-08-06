#include <stdio.h>
#include <stdlib.h>

int process_array(int* arr, int size) {
    // {fact rule=code-quality-error-handling@v1.0 defects=1}
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
    // {/fact}
}

int main() {
    int* numbers = malloc(5 * sizeof(int));
    for (int i = 0; i < 5; i++) {
        numbers[i] = i + 1;
    }
    
    int result = process_array(numbers, 5);
    printf("Sum: %d\n", result);
    
    free(numbers);
    return 0;
}