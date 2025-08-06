#include <iostream>
#include <vector>
#include <string>

class DataHandler {
public:
    // {fact rule=code-quality-naming@v1.0 defects=1}
    void proc(std::vector<int>& d, int x) {
        for (int i = 0; i < d.size(); i++) {
            d[i] = d[i] * x;
        }
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    void multiplyAllElements(std::vector<int>& numbers, int multiplier) {
        for (size_t index = 0; index < numbers.size(); index++) {
            numbers[index] = numbers[index] * multiplier;
        }
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    bool chk(const std::string& s) {
        return s.length() > 0 && s.length() < 100;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    bool isValidStringLength(const std::string& inputString) {
        return inputString.length() > 0 && inputString.length() < 100;
    }
    // {/fact}
};

int main() {
    DataHandler handler;
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    handler.proc(numbers, 2);
    return 0;
}