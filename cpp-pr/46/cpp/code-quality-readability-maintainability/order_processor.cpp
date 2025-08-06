#include <iostream>
#include <string>

class OrderProcessor {
public:
    double calculateTotal(double price, int quantity, const std::string& customerType, bool hasDiscount, bool isWeekend) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        double total = price * quantity;
        if (customerType == "VIP") total *= 0.9;
        if (customerType == "Regular") total *= 0.95;
        if (customerType == "Premium") total *= 0.85;
        if (hasDiscount) total *= 0.9;
        if (isWeekend) total *= 1.1;
        if (total > 1000) total *= 0.98;
        if (quantity > 10) total *= 0.97;
        if (quantity > 50) total *= 0.95;
        return total;
        // {/fact}
    }
    
    double calculateTotalReadable(double price, int quantity, const std::string& customerType, bool hasDiscount, bool isWeekend) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        double baseTotal = price * quantity;
        double customerDiscount = getCustomerDiscount(customerType);
        double additionalDiscount = hasDiscount ? 0.9 : 1.0;
        double weekendSurcharge = isWeekend ? 1.1 : 1.0;
        double volumeDiscount = getVolumeDiscount(baseTotal, quantity);
        
        return baseTotal * customerDiscount * additionalDiscount * weekendSurcharge * volumeDiscount;
        // {/fact}
    }
    
private:
    double getCustomerDiscount(const std::string& customerType) {
        if (customerType == "VIP") return 0.9;
        if (customerType == "Premium") return 0.85;
        if (customerType == "Regular") return 0.95;
        return 1.0;
    }
    
    double getVolumeDiscount(double total, int quantity) {
        double discount = 1.0;
        if (total > 1000) discount *= 0.98;
        if (quantity > 50) discount *= 0.95;
        else if (quantity > 10) discount *= 0.97;
        return discount;
    }
};

int main() {
    OrderProcessor processor;
    double total = processor.calculateTotal(100.0, 5, "VIP", true, false);
    std::cout << "Total: " << total << std::endl;
    return 0;
}