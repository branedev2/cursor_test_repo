#include <stdio.h>

#define ARRAY_SIZE 10000

int numbers[ARRAY_SIZE];

void initialize_array() {
    for (int i = 0; i < ARRAY_SIZE; i++) {
        numbers[i] = i;
    }
}

int find_number(int target) {
    // {fact rule=code-quality-performance@v1.0 defects=1}
    for (int i = 0; i < ARRAY_SIZE; i++) {
        if (numbers[i] == target) {
            return 1;
        }
    }
    return 0;
    // {/fact}
}

int main() {
    initialize_array();
    
    if (find_number(5000)) {
        printf("Found number 5000\n");
    }
    
    return 0;
}