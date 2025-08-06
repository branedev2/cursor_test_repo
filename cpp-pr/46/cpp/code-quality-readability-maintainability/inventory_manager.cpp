#include <iostream>
#include <string>
#include <map>

class InventoryManager {
private:
    std::map<std::string, int> inventory;
    
public:
    bool processOrder(const std::string& item, int quantity, const std::string& customerType, bool isUrgent) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        if (inventory.find(item) == inventory.end()) return false;
        if (inventory[item] < quantity) {
            if (customerType == "VIP" && isUrgent) {
                std::cout << "Ordering more " << item << " for VIP customer" << std::endl;
                inventory[item] += quantity * 2;
            } else if (customerType == "Premium") {
                std::cout << "Ordering more " << item << " for Premium customer" << std::endl;
                inventory[item] += quantity;
            } else {
                return false;
            }
        }
        inventory[item] -= quantity;
        if (customerType == "VIP") {
            std::cout << "VIP order processed for " << item << std::endl;
        } else if (customerType == "Premium") {
            std::cout << "Premium order processed for " << item << std::endl;
        } else {
            std::cout << "Regular order processed for " << item << std::endl;
        }
        return true;
        // {/fact}
    }
    
    bool processOrderReadable(const std::string& item, int quantity, const std::string& customerType, bool isUrgent) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        if (!itemExists(item)) {
            return false;
        }
        
        if (!hasEnoughStock(item, quantity)) {
            if (!canRestockForCustomer(customerType, isUrgent)) {
                return false;
            }
            restockItem(item, quantity, customerType, isUrgent);
        }
        
        fulfillOrder(item, quantity);
        logOrderCompletion(item, customerType);
        
        return true;
        // {/fact}
    }
    
private:
    bool itemExists(const std::string& item) {
        return inventory.find(item) != inventory.end();
    }
    
    bool hasEnoughStock(const std::string& item, int quantity) {
        return inventory[item] >= quantity;
    }
    
    bool canRestockForCustomer(const std::string& customerType, bool isUrgent) {
        return (customerType == "VIP" && isUrgent) || customerType == "Premium";
    }
    
    void restockItem(const std::string& item, int quantity, const std::string& customerType, bool isUrgent) {
        int restockAmount = (customerType == "VIP" && isUrgent) ? quantity * 2 : quantity;
        inventory[item] += restockAmount;
        std::cout << "Ordering more " << item << " for " << customerType << " customer" << std::endl;
    }
    
    void fulfillOrder(const std::string& item, int quantity) {
        inventory[item] -= quantity;
    }
    
    void logOrderCompletion(const std::string& item, const std::string& customerType) {
        std::cout << customerType << " order processed for " << item << std::endl;
    }
};

int main() {
    InventoryManager manager;
    bool success = manager.processOrder("laptop", 2, "VIP", true);
    std::cout << "Order success: " << (success ? "Yes" : "No") << std::endl;
    return 0;
}