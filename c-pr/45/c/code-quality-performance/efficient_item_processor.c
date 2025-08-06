#include <stdio.h>
#include <stdlib.h>

int* process_numbers(int count) {
    // {fact rule=code-quality-performance@v1.0 defects=0}
    if (count <= 0) return NULL;
    
    int* numbers = malloc(count * sizeof(int));
    if (numbers == NULL) return NULL;
    
    for (int i = 0; i < count; i++) {
        numbers[i] = i * 2;
    }
    
    return numbers;
    // {/fact}
}

int main() {
    int* numbers = process_numbers(1000);
    if (numbers) {
        printf("First few numbers: %d %d %d\n", numbers[0], numbers[1], numbers[2]);
        free(numbers);
    }
    return 0;
}