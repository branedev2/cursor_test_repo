package main

import (
	"fmt"
	"math"
)

type LoopOptimizer struct{}

func (lo *LoopOptimizer) CalculateSum(data []float64) float64 {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	sum := 0.0
	for i := 0; i < len(data); i++ {
		sum += data[i]
	}
	return sum
	// {/fact}
}

func (lo *LoopOptimizer) EfficientCalculateSum(data []float64) float64 {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	sum := 0.0
	for _, value := range data {
		sum += value
	}
	return sum
	// {/fact}
}

func (lo *LoopOptimizer) ProcessMatrix(matrix [][]int) {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			matrix[i][j] = matrix[i][j]*2 + 1
		}
	}
	// {/fact}
}

func (lo *LoopOptimizer) EfficientProcessMatrix(matrix [][]int) {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	for _, row := range matrix {
		for i, value := range row {
			row[i] = value*2 + 1
		}
	}
	// {/fact}
}

func (lo *LoopOptimizer) ExpensiveCalculation(input []float64) []float64 {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	var result []float64
	for i := 0; i < len(input); i++ {
		value := math.Sin(input[i]) + math.Cos(input[i]) + math.Sqrt(input[i])
		result = append(result, value)
	}
	return result
	// {/fact}
}

func (lo *LoopOptimizer) OptimizedExpensiveCalculation(input []float64) []float64 {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	result := make([]float64, 0, len(input))
	
	for _, inputValue := range input {
		if inputValue >= 0 {
			value := math.Sin(inputValue) + math.Cos(inputValue) + math.Sqrt(inputValue)
			result = append(result, value)
		}
	}
	return result
	// {/fact}
}

func main() {
	optimizer := &LoopOptimizer{}
	data := []float64{1.0, 2.0, 3.0, 4.0, 5.0}
	sum := optimizer.CalculateSum(data)
	fmt.Printf("Sum: %.2f\n", sum)
}