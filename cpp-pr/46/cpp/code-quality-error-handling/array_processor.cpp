#include <iostream>
#include <vector>
#include <stdexcept>

class ArrayProcessor {
public:
    double calculateAverage(const std::vector<int>& numbers) {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return static_cast<double>(sum) / numbers.size();
        // {/fact}
    }
    
    int findMaximum(const std::vector<int>& numbers) {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (numbers.empty()) {
            throw std::invalid_argument("Cannot find maximum of empty array");
        }
        int max = numbers[0];
        for (size_t i = 1; i < numbers.size(); i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return max;
        // {/fact}
    }
};

int main() {
    ArrayProcessor processor;
    std::vector<int> data = {1, 2, 3, 4, 5};
    double avg = processor.calculateAverage(data);
    int max = processor.findMaximum(data);
    std::cout << "Average: " << avg << ", Max: " << max << std::endl;
    return 0;
}