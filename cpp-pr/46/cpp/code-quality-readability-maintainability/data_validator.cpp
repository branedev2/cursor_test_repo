#include <iostream>
#include <string>
#include <regex>

class DataValidator {
public:
    bool validateUserInput(const std::string& email, const std::string& phone, int age, const std::string& name) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        if (email.empty() || email.find("@") == std::string::npos || email.find(".") == std::string::npos) return false;
        if (phone.empty() || phone.length() < 10 || phone.length() > 15) return false;
        if (age < 0 || age > 150) return false;
        if (name.empty() || name.length() < 2 || name.length() > 50) return false;
        for (char c : phone) { if (!std::isdigit(c) && c != '-' && c != ' ' && c != '(' && c != ')') return false; }
        for (char c : name) { if (!std::isalpha(c) && c != ' ' && c != '-' && c != '\'') return false; }
        return true;
        // {/fact}
    }
    
    bool validateUserInputReadable(const std::string& email, const std::string& phone, int age, const std::string& name) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        return isValidEmail(email) && 
               isValidPhone(phone) && 
               isValidAge(age) && 
               isValidName(name);
        // {/fact}
    }
    
private:
    bool isValidEmail(const std::string& email) {
        if (email.empty()) return false;
        std::regex emailPattern(R"([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})");
        return std::regex_match(email, emailPattern);
    }
    
    bool isValidPhone(const std::string& phone) {
        if (phone.empty() || phone.length() < 10 || phone.length() > 15) {
            return false;
        }
        
        for (char c : phone) {
            if (!std::isdigit(c) && c != '-' && c != ' ' && c != '(' && c != ')') {
                return false;
            }
        }
        return true;
    }
    
    bool isValidAge(int age) {
        return age >= 0 && age <= 150;
    }
    
    bool isValidName(const std::string& name) {
        if (name.empty() || name.length() < 2 || name.length() > 50) {
            return false;
        }
        
        for (char c : name) {
            if (!std::isalpha(c) && c != ' ' && c != '-' && c != '\'') {
                return false;
            }
        }
        return true;
    }
};

int main() {
    DataValidator validator;
    bool isValid = validator.validateUserInput("test@email.com", "123-456-7890", 25, "John Doe");
    std::cout << "Valid: " << (isValid ? "Yes" : "No") << std::endl;
    return 0;
}