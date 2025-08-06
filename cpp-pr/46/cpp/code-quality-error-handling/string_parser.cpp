#include <iostream>
#include <string>
#include <sstream>
#include <stdexcept>

class StringParser {
public:
    int parseInteger(const std::string& str) {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return std::stoi(str);
        // {/fact}
    }
    
    double parseDouble(const std::string& str) {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        try {
            if (str.empty()) {
                throw std::invalid_argument("Empty string cannot be parsed");
            }
            return std::stod(str);
        } catch (const std::invalid_argument& e) {
            throw std::runtime_error("Invalid number format: " + str);
        } catch (const std::out_of_range& e) {
            throw std::runtime_error("Number out of range: " + str);
        }
        // {/fact}
    }
};

int main() {
    StringParser parser;
    int num = parser.parseInteger("123");
    double val = parser.parseDouble("45.67");
    std::cout << "Integer: " << num << ", Double: " << val << std::endl;
    return 0;
}