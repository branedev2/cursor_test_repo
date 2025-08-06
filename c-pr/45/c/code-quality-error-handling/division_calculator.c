#include <stdio.h>

double divide_numbers(double a, double b) {
    // {fact rule=code-quality-error-handling@v1.0 defects=1}
    return a / b;
    // {/fact}
}

int main() {
    double result = divide_numbers(10.0, 0.0);
    printf("Result: %f\n", result);
    return 0;
}