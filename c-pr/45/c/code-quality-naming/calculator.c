#include <stdio.h>

// {fact rule=code-quality-naming@v1.0 defects=1}
double calc(double a, double b, char op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b != 0 ? a / b : 0;
        default: return 0;
    }
}
// {/fact}

int main() {
    double result = calc(10.0, 5.0, '+');
    printf("Result: %.2f\n", result);
    return 0;
}