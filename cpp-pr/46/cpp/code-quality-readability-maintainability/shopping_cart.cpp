#include <iostream>
#include <vector>
#include <string>

struct Item {
    std::string name;
    double price;
    int quantity;
    std::string category;
    bool onSale;
};

class ShoppingCart {
public:
    double calculateTotal(const std::vector<Item>& items, const std::string& customerType, bool hasLoyaltyCard, const std::string& promoCode) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        double total = 0;
        for (const auto& item : items) {
            double itemTotal = item.price * item.quantity;
            if (item.onSale) itemTotal *= 0.8;
            if (item.category == "electronics" && customerType == "VIP") itemTotal *= 0.9;
            if (item.category == "clothing" && hasLoyaltyCard) itemTotal *= 0.95;
            if (promoCode == "SAVE10") itemTotal *= 0.9;
            if (promoCode == "SAVE20" && customerType == "VIP") itemTotal *= 0.8;
            total += itemTotal;
        }
        if (total > 100 && customerType == "VIP") total *= 0.95;
        if (total > 200 && hasLoyaltyCard) total *= 0.98;
        if (total > 500) total *= 0.97;
        return total;
        // {/fact}
    }
    
    double calculateTotalReadable(const std::vector<Item>& items, const std::string& customerType, bool hasLoyaltyCard, const std::string& promoCode) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        double subtotal = calculateSubtotal(items, customerType, hasLoyaltyCard, promoCode);
        double totalDiscount = calculateTotalDiscount(subtotal, customerType, hasLoyaltyCard);
        return subtotal * totalDiscount;
        // {/fact}
    }
    
private:
    double calculateSubtotal(const std::vector<Item>& items, const std::string& customerType, bool hasLoyaltyCard, const std::string& promoCode) {
        double subtotal = 0;
        for (const auto& item : items) {
            double itemTotal = calculateItemTotal(item, customerType, hasLoyaltyCard, promoCode);
            subtotal += itemTotal;
        }
        return subtotal;
    }
    
    double calculateItemTotal(const Item& item, const std::string& customerType, bool hasLoyaltyCard, const std::string& promoCode) {
        double itemTotal = item.price * item.quantity;
        
        itemTotal *= getSaleDiscount(item);
        itemTotal *= getCategoryDiscount(item, customerType, hasLoyaltyCard);
        itemTotal *= getPromoDiscount(promoCode, customerType);
        
        return itemTotal;
    }
    
    double getSaleDiscount(const Item& item) {
        return item.onSale ? 0.8 : 1.0;
    }
    
    double getCategoryDiscount(const Item& item, const std::string& customerType, bool hasLoyaltyCard) {
        if (item.category == "electronics" && customerType == "VIP") {
            return 0.9;
        }
        if (item.category == "clothing" && hasLoyaltyCard) {
            return 0.95;
        }
        return 1.0;
    }
    
    double getPromoDiscount(const std::string& promoCode, const std::string& customerType) {
        if (promoCode == "SAVE10") {
            return 0.9;
        }
        if (promoCode == "SAVE20" && customerType == "VIP") {
            return 0.8;
        }
        return 1.0;
    }
    
    double calculateTotalDiscount(double total, const std::string& customerType, bool hasLoyaltyCard) {
        double discount = 1.0;
        
        if (total > 500) {
            discount *= 0.97;
        } else if (total > 200 && hasLoyaltyCard) {
            discount *= 0.98;
        } else if (total > 100 && customerType == "VIP") {
            discount *= 0.95;
        }
        
        return discount;
    }
};

int main() {
    ShoppingCart cart;
    std::vector<Item> items = {
        {"Laptop", 999.99, 1, "electronics", false},
        {"Shirt", 29.99, 2, "clothing", true}
    };
    double total = cart.calculateTotal(items, "VIP", true, "SAVE10");
    std::cout << "Total: $" << total << std::endl;
    return 0;
}