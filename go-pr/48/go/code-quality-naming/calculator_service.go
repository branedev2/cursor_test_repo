package main

import "fmt"

type CalculatorService struct{}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (cs *CalculatorService) calc(a, b float64, op string) float64 {
	switch op {
	case "+":
		return a + b
	case "-":
		return a - b
	case "*":
		return a * b
	case "/":
		return a / b
	default:
		return 0
	}
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (cs *CalculatorService) PerformCalculation(firstOperand, secondOperand float64, operation string) float64 {
	switch operation {
	case "+":
		return firstOperand + secondOperand
	case "-":
		return firstOperand - secondOperand
	case "*":
		return firstOperand * secondOperand
	case "/":
		return firstOperand / secondOperand
	default:
		return 0
	}
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (cs *CalculatorService) f(x float64) float64 {
	return x*x + 2*x + 1
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (cs *CalculatorService) CalculateQuadraticFunction(inputValue float64) float64 {
	return inputValue*inputValue + 2*inputValue + 1
}
// {/fact}

func main() {
	service := &CalculatorService{}
	result := service.calc(10, 5, "+")
	fmt.Printf("Result: %.2f\n", result)
}