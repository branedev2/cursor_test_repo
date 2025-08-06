#include <iostream>
#include <string>
#include <vector>
#include <sstream>

class StringConcatenator {
public:
    std::string concatenateStrings(const std::vector<std::string>& strings) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        std::string result = "";
        for (const auto& str : strings) {
            result += str;
        }
        return result;
        // {/fact}
    }
    
    std::string efficientConcatenateStrings(const std::vector<std::string>& strings) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        std::ostringstream oss;
        for (const auto& str : strings) {
            oss << str;
        }
        return oss.str();
        // {/fact}
    }
    
    std::string buildLargeString(int count) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        std::string result;
        for (int i = 0; i < count; i++) {
            result = result + "data" + std::to_string(i) + " ";
        }
        return result;
        // {/fact}
    }
};

int main() {
    StringConcatenator concatenator;
    std::vector<std::string> data = {"Hello", " ", "World", "!"};
    std::string result = concatenator.concatenateStrings(data);
    std::cout << result << std::endl;
    return 0;
}