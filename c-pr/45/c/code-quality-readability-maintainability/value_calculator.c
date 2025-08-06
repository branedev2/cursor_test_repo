#include <stdio.h>
#include <string.h>

double calculate_total(double price, int quantity, const char* customer_type, int has_discount) {
    // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
    double total = price * quantity;
    if (strcmp(customer_type, "VIP") == 0) total *= 0.9;
    if (strcmp(customer_type, "Regular") == 0) total *= 0.95;
    if (has_discount) total *= 0.85;
    if (total > 1000) total *= 0.98;
    if (quantity > 10) total *= 0.97;
    return total;
    // {/fact}
}

int main() {
    double result = calculate_total(100.0, 5, "VIP", 1);
    printf("Total: %.2f\n", result);
    return 0;
}