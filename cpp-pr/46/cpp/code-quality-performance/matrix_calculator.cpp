#include <iostream>
#include <vector>

class MatrixCalculator {
public:
    std::vector<std::vector<int>> multiplyMatrices(const std::vector<std::vector<int>>& a, const std::vector<std::vector<int>>& b) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        int rows = a.size();
        int cols = b[0].size();
        int common = a[0].size();
        
        std::vector<std::vector<int>> result(rows, std::vector<int>(cols, 0));
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                for (int k = 0; k < common; k++) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return result;
        // {/fact}
    }
    
    std::vector<std::vector<int>> optimizedMultiplyMatrices(const std::vector<std::vector<int>>& a, const std::vector<std::vector<int>>& b) {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        int rows = a.size();
        int cols = b[0].size();
        int common = a[0].size();
        
        std::vector<std::vector<int>> result(rows, std::vector<int>(cols, 0));
        
        for (int i = 0; i < rows; i++) {
            for (int k = 0; k < common; k++) {
                for (int j = 0; j < cols; j++) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return result;
        // {/fact}
    }
    
    std::vector<int> sumRows(const std::vector<std::vector<int>>& matrix) {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        std::vector<int> sums;
        for (const auto& row : matrix) {
            int sum = 0;
            for (int val : row) {
                sum += val;
            }
            sums.push_back(sum);
        }
        return sums;
        // {/fact}
    }
};

int main() {
    MatrixCalculator calc;
    std::vector<std::vector<int>> a = {{1, 2}, {3, 4}};
    std::vector<std::vector<int>> b = {{5, 6}, {7, 8}};
    auto result = calc.multiplyMatrices(a, b);
    return 0;
}