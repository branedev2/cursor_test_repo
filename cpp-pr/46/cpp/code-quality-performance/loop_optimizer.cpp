#include <iostream>
#include <vector>
#include <cmath>

class LoopOptimizer {
public:
    double calculateSum(const std::vector<double>& data) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        double sum = 0.0;
        for (int i = 0; i < data.size(); i++) {
            sum += data[i];
        }
        return sum;
        // {/fact}
    }
    
    double efficientCalculateSum(const std::vector<double>& data) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        double sum = 0.0;
        for (const auto& value : data) {
            sum += value;
        }
        return sum;
        // {/fact}
    }
    
    void processMatrix(std::vector<std::vector<int>>& matrix) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        for (int i = 0; i < matrix.size(); i++) {
            for (int j = 0; j < matrix[i].size(); j++) {
                matrix[i][j] = matrix[i][j] * 2 + 1;
            }
        }
        // {/fact}
    }
    
    void efficientProcessMatrix(std::vector<std::vector<int>>& matrix) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        for (auto& row : matrix) {
            for (auto& value : row) {
                value = value * 2 + 1;
            }
        }
        // {/fact}
    }
    
    std::vector<double> expensiveCalculation(const std::vector<double>& input) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        std::vector<double> result;
        for (int i = 0; i < input.size(); i++) {
            double value = std::sin(input[i]) + std::cos(input[i]) + std::sqrt(input[i]);
            result.push_back(value);
        }
        return result;
        // {/fact}
    }
    
    std::vector<double> optimizedExpensiveCalculation(const std::vector<double>& input) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        std::vector<double> result;
        result.reserve(input.size());
        
        for (const auto& inputValue : input) {
            if (inputValue >= 0) {
                double value = std::sin(inputValue) + std::cos(inputValue) + std::sqrt(inputValue);
                result.push_back(value);
            }
        }
        return result;
        // {/fact}
    }
};

int main() {
    LoopOptimizer optimizer;
    std::vector<double> data = {1.0, 2.0, 3.0, 4.0, 5.0};
    double sum = optimizer.calculateSum(data);
    std::cout << "Sum: " << sum << std::endl;
    return 0;
}