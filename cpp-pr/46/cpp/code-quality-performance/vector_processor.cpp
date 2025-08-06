#include <iostream>
#include <vector>
#include <algorithm>

class VectorProcessor {
public:
    std::vector<int> processData(const std::vector<int>& input) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        std::vector<int> result;
        for (int i = 0; i < input.size(); i++) {
            if (input[i] > 0) {
                result.push_back(input[i] * 2);
            }
        }
        return result;
        // {/fact}
    }
    
    std::vector<int> efficientProcessData(const std::vector<int>& input) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        std::vector<int> result;
        result.reserve(input.size());
        for (const auto& value : input) {
            if (value > 0) {
                result.push_back(value * 2);
            }
        }
        return result;
        // {/fact}
    }
    
    bool containsValue(const std::vector<int>& data, int target) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (int i = 0; i < data.size(); i++) {
            if (data[i] == target) {
                return true;
            }
        }
        return false;
        // {/fact}
    }
    
    bool efficientContainsValue(const std::vector<int>& data, int target) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return std::find(data.begin(), data.end(), target) != data.end();
        // {/fact}
    }
};

int main() {
    VectorProcessor processor;
    std::vector<int> data = {1, -2, 3, -4, 5};
    std::vector<int> result = processor.processData(data);
    return 0;
}