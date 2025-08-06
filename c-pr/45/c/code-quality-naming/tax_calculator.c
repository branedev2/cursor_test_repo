#include <stdio.h>

// {fact rule=code-quality-naming@v1.0 defects=0}
double perform_calculation(double first_operand, double second_operand, char operation) {
    switch (operation) {
        case '+': return first_operand + second_operand;
        case '-': return first_operand - second_operand;
        case '*': return first_operand * second_operand;
        case '/': 
            if (second_operand != 0) {
                return first_operand / second_operand;
            } else {
                fprintf(stderr, "Error: Division by zero\n");
                return 0;
            }
        default: 
            fprintf(stderr, "Error: Unsupported operation %c\n", operation);
            return 0;
    }
}
// {/fact}

int main() {
    double result = perform_calculation(10.0, 5.0, '+');
    printf("Result: %.2f\n", result);
    return 0;
}