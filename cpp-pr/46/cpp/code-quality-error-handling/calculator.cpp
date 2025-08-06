#include <iostream>
#include <stdexcept>
#include <cmath>

class Calculator {
public:
    double divide(double a, double b) {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return a / b;
        // {/fact}
    }
    
    double safeDivide(double a, double b) {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (b == 0.0) {
            throw std::invalid_argument("Division by zero is not allowed");
        }
        return a / b;
        // {/fact}
    }
    
    double squareRoot(double value) {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return std::sqrt(value);
        // {/fact}
    }
    
    double safeSquareRoot(double value) {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (value < 0.0) {
            throw std::invalid_argument("Cannot calculate square root of negative number");
        }
        return std::sqrt(value);
        // {/fact}
    }
};

int main() {
    Calculator calc;
    double result1 = calc.divide(10.0, 2.0);
    double result2 = calc.squareRoot(16.0);
    std::cout << "Division: " << result1 << ", Square root: " << result2 << std::endl;
    return 0;
}