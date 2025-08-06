#include <stdio.h>
#include <string.h>

void mask_card_number(const char* card_number, char* masked_card) {
    int len = strlen(card_number);
    if (len >= 8) {
        sprintf(masked_card, "%.4s****%.4s", card_number, card_number + len - 4);
    } else {
        strcpy(masked_card, "****");
    }
}

int process_payment(const char* card_number, const char* cvv, double amount) {
    // {fact rule=code-quality-logging@v1.0 defects=0}
    char masked_card[20];
    mask_card_number(card_number, masked_card);
    
    printf("Processing payment: Card=%s, Amount=%.2f\n", masked_card, amount);
    
    // Payment processing logic
    if (strlen(card_number) == 16) {
        printf("Payment successful: %s charged $%.2f\n", masked_card, amount);
        return 1;
    } else {
        printf("Payment failed for card %s\n", masked_card);
        return 0;
    }
    // {/fact}
}

int main() {
    process_payment("1234567890123456", "123", 99.99);
    return 0;
}