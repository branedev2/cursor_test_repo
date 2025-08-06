#include <iostream>
#include <cmath>

class CalculatorService {
public:
    // {fact rule=code-quality-naming@v1.0 defects=1}
    double calc(double a, double b, char op) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return 0;
        }
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    double performCalculation(double firstOperand, double secondOperand, char operation) {
        switch (operation) {
            case '+': return firstOperand + secondOperand;
            case '-': return firstOperand - secondOperand;
            case '*': return firstOperand * secondOperand;
            case '/': return firstOperand / secondOperand;
            default: return 0;
        }
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=1}
    double f(double x) {
        return x * x + 2 * x + 1;
    }
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    double calculateQuadraticFunction(double inputValue) {
        return inputValue * inputValue + 2 * inputValue + 1;
    }
    // {/fact}
};

int main() {
    CalculatorService service;
    double result = service.calc(10, 5, '+');
    std::cout << "Result: " << result << std::endl;
    return 0;
}