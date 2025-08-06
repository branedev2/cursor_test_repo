#include <stdio.h>
#include <stdlib.h>

int* process_numbers(int count) {
    // {fact rule=code-quality-performance@v1.0 defects=1}
    int* numbers = malloc(sizeof(int));
    int capacity = 1;
    
    for (int i = 0; i < count; i++) {
        if (i >= capacity) {
            capacity *= 2;
            numbers = realloc(numbers, capacity * sizeof(int));
        }
        numbers[i] = i * 2;
    }
    
    return numbers;
    // {/fact}
}

int main() {
    int* numbers = process_numbers(1000);
    printf("First few numbers: %d %d %d\n", numbers[0], numbers[1], numbers[2]);
    free(numbers);
    return 0;
}