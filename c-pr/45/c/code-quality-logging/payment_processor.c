#include <stdio.h>
#include <string.h>

int process_payment(const char* card_number, const char* cvv, double amount) {
    // {fact rule=code-quality-logging@v1.0 defects=1}
    printf("Processing payment: Card=%s, CVV=%s, Amount=%.2f\n", card_number, cvv, amount);
    
    // Payment processing logic
    if (strlen(card_number) == 16) {
        printf("Payment successful: %s charged $%.2f\n", card_number, amount);
        return 1;
    } else {
        printf("Payment failed for card %s\n", card_number);
        return 0;
    }
    // {/fact}
}

int main() {
    process_payment("1234567890123456", "123", 99.99);
    return 0;
}