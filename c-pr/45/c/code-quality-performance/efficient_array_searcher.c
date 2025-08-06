#include <stdio.h>

#define ARRAY_SIZE 10000

int numbers[ARRAY_SIZE];

void initialize_array() {
    for (int i = 0; i < ARRAY_SIZE; i++) {
        numbers[i] = i;
    }
}

int find_number(int target) {
    // {fact rule=code-quality-performance@v1.0 defects=0}
    // Binary search since array is sorted
    int left = 0;
    int right = ARRAY_SIZE - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (numbers[mid] == target) {
            return 1;
        }
        
        if (numbers[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
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