#include <stdio.h>
#include <stdlib.h>

int* create_array(int size) {
    // {fact rule=code-quality-error-handling@v1.0 defects=1}
    int* arr = malloc(size * sizeof(int));
    for (int i = 0; i < size; i++) {
        arr[i] = i;
    }
    return arr;
    // {/fact}
}

int main() {
    int* numbers = create_array(5);
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");
    free(numbers);
    return 0;
}