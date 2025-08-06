#include <iostream>
#include <string>

class PaymentProcessor {
public:
    bool processPayment(const std::string& cardNumber, const std::string& cvv, double amount) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << "Processing payment: Card=" << cardNumber << ", CVV=" << cvv << ", Amount=" << amount << std::endl;
        return true;
        // {/fact}
    }
    
    bool secureProcessPayment(const std::string& cardNumber, const std::string& cvv, double amount) {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        std::string maskedCard = cardNumber.substr(0, 4) + "****" + cardNumber.substr(cardNumber.length() - 4);
        std::cout << "Processing payment: Card=" << maskedCard << ", Amount=" << amount << std::endl;
        return true;
        // {/fact}
    }
    
    void logTransaction(const std::string& transactionId, const std::string& details) {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        std::cout << transactionId << ": " << details << std::endl;
        // {/fact}
    }
};

int main() {
    PaymentProcessor processor;
    processor.processPayment("1234567890123456", "123", 99.99);
    return 0;
}