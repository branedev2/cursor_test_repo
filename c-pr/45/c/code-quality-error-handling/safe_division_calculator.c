#include <stdio.h>
#include <math.h>

int divide_numbers(double a, double b, double* result) {
    // {fact rule=code-quality-error-handling@v1.0 defects=0}
    if (result == NULL) {
        fprintf(stderr, "Error: result pointer is NULL\n");
        return -1;
    }
    
    if (fabs(b) < 1e-10) {
        fprintf(stderr, "Error: division by zero\n");
        return -1;
    }
    
    *result = a / b;
    return 0;
    // {/fact}
}

int main() {
    double result;
    if (divide_numbers(10.0, 2.0, &result) == 0) {
        printf("Result: %f\n", result);
    }
    
    if (divide_numbers(10.0, 0.0, &result) != 0) {
        printf("Division failed as expected\n");
    }
    
    return 0;
}