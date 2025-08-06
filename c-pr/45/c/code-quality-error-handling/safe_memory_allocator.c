#include <stdio.h>
#include <stdlib.h>

int* create_array(int size) {
    // {fact rule=code-quality-error-handling@v1.0 defects=0}
    if (size <= 0) {
        fprintf(stderr, "Error: invalid array size %d\n", size);
        return NULL;
    }
    
    int* arr = malloc(size * sizeof(int));
    if (arr == NULL) {
        fprintf(stderr, "Error: memory allocation failed for size %d\n", size);
        return NULL;
    }
    
    for (int i = 0; i < size; i++) {
        arr[i] = i;
    }
    return arr;
    // {/fact}
}

int main() {
    int* numbers = create_array(5);
    if (numbers != NULL) {
        for (int i = 0; i < 5; i++) {
            printf("%d ", numbers[i]);
        }
        printf("\n");
        free(numbers);
    }
    return 0;
}