#include <stdio.h>

// {fact rule=code-quality-naming@v1.0 defects=0}
void calculate_statistics(int* numbers, int array_size, int* total_sum, double* average) {
    *total_sum = 0;
    *average = 0.0;
    
    for (int i = 0; i < array_size; i++) {
        *total_sum += numbers[i];
    }
    
    *average = (array_size > 0) ? (double)*total_sum / array_size : 0.0;
}

void format_statistics_report(int total, double average_value) {
    printf("Total: %d, Average: %.2f\n", total, average_value);
}
// {/fact}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int total;
    double average;
    
    calculate_statistics(numbers, 5, &total, &average);
    format_statistics_report(total, average);
    
    return 0;
}