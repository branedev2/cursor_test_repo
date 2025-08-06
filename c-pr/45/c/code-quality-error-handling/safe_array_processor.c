#include <stdio.h>
#include <stdlib.h>

int process_array(int* arr, int size) {
    // {fact rule=code-quality-error-handling@v1.0 defects=0}
    if (arr == NULL) {
        fprintf(stderr, "Error: array pointer is NULL\n");
        return -1;
    }
    
    if (size <= 0) {
        fprintf(stderr, "Error: invalid array size %d\n", size);
        return -1;
    }
    
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
    // {/fact}
}

int main() {
    int* numbers = malloc(5 * sizeof(int));
    if (numbers == NULL) {
        fprintf(stderr, "Error: memory allocation failed\n");
        return 1;
    }
    
    for (int i = 0; i < 5; i++) {
        numbers[i] = i + 1;
    }
    
    int result = process_array(numbers, 5);
    if (result >= 0) {
        printf("Sum: %d\n", result);
    }
    
    free(numbers);
    return 0;
}