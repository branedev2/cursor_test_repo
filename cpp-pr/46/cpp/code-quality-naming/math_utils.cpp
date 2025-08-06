#include <iostream>
#include <vector>
#include <cmath>

class MathUtils {
public:
    // {fact rule=code-quality-naming@v1.0 defects=1}
    double avg(const std::vector<double>& nums) {
        double s = 0;
        for (double n : nums) {
            s += n;
        }
        return s / nums.size();
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    double calculateAverage(const std::vector<double>& numbers) {
        double sum = 0;
        for (double number : numbers) {
            sum += number;
        }
        return sum / numbers.size();
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    double dist(double x1, double y1, double x2, double y2) {
        double dx = x2 - x1;
        double dy = y2 - y1;
        return std::sqrt(dx * dx + dy * dy);
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    double calculateEuclideanDistance(double firstPointX, double firstPointY, double secondPointX, double secondPointY) {
        double deltaX = secondPointX - firstPointX;
        double deltaY = secondPointY - firstPointY;
        return std::sqrt(deltaX * deltaX + deltaY * deltaY);
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    bool isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
    // {/fact}
};

int main() {
    MathUtils utils;
    std::vector<double> data = {1.0, 2.0, 3.0, 4.0, 5.0};
    double average = utils.avg(data);
    std::cout << "Average: " << average << std::endl;
    return 0;
}