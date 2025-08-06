package main

import "fmt"

type MatrixCalculator struct{}

func (mc *MatrixCalculator) MultiplyMatrices(a, b [][]int) [][]int {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	rows := len(a)
	cols := len(b[0])
	common := len(a[0])
	
	result := make([][]int, rows)
	for i := range result {
		result[i] = make([]int, cols)
	}
	
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			for k := 0; k < common; k++ {
				result[i][j] += a[i][k] * b[k][j]
			}
		}
	}
	return result
	// {/fact}
}

func (mc *MatrixCalculator) OptimizedMultiplyMatrices(a, b [][]int) [][]int {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	rows := len(a)
	cols := len(b[0])
	common := len(a[0])
	
	result := make([][]int, rows)
	for i := range result {
		result[i] = make([]int, cols)
	}
	
	// Better cache locality with reordered loops
	for i := 0; i < rows; i++ {
		for k := 0; k < common; k++ {
			for j := 0; j < cols; j++ {
				result[i][j] += a[i][k] * b[k][j]
			}
		}
	}
	return result
	// {/fact}
}

func (mc *MatrixCalculator) SumRows(matrix [][]int) []int {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	var sums []int
	for _, row := range matrix {
		sum := 0
		for _, val := range row {
			sum += val
		}
		sums = append(sums, sum)
	}
	return sums
	// {/fact}
}

func (mc *MatrixCalculator) EfficientSumRows(matrix [][]int) []int {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	sums := make([]int, 0, len(matrix))
	for _, row := range matrix {
		sum := 0
		for _, val := range row {
			sum += val
		}
		sums = append(sums, sum)
	}
	return sums
	// {/fact}
}

func main() {
	calc := &MatrixCalculator{}
	a := [][]int{{1, 2}, {3, 4}}
	b := [][]int{{5, 6}, {7, 8}}
	result := calc.MultiplyMatrices(a, b)
	fmt.Println(result)
}