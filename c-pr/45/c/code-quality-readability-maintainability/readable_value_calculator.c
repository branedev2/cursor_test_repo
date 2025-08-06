#include <stdio.h>
#include <string.h>

#define VIP_DISCOUNT 0.9
#define REGULAR_DISCOUNT 0.95
#define ADDITIONAL_DISCOUNT 0.85
#define LARGE_ORDER_DISCOUNT 0.98
#define BULK_QUANTITY_DISCOUNT 0.97
#define LARGE_ORDER_THRESHOLD 1000
#define BULK_QUANTITY_THRESHOLD 10

double get_customer_type_discount(const char* customer_type) {
    if (strcmp(customer_type, "VIP") == 0) {
        return VIP_DISCOUNT;
    } else if (strcmp(customer_type, "Regular") == 0) {
        return REGULAR_DISCOUNT;
    }
    return 1.0;
}

double apply_volume_discounts(double total, int quantity) {
    if (total > LARGE_ORDER_THRESHOLD) {
        total *= LARGE_ORDER_DISCOUNT;
    }
    if (quantity > BULK_QUANTITY_THRESHOLD) {
        total *= BULK_QUANTITY_DISCOUNT;
    }
    return total;
}

double calculate_total(double price, int quantity, const char* customer_type, int has_discount) {
    // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
    double base_total = price * quantity;
    
    double customer_discount = get_customer_type_discount(customer_type);
    double total = base_total * customer_discount;
    
    if (has_discount) {
        total *= ADDITIONAL_DISCOUNT;
    }
    
    return apply_volume_discounts(total, quantity);
    // {/fact}
}

int main() {
    double result = calculate_total(100.0, 5, "VIP", 1);
    printf("Total: %.2f\n", result);
    return 0;
}