package main

import (
	"errors"
	"fmt"
)

type ArrayProcessor struct{}

func (ap *ArrayProcessor) CalculateAverage(numbers []int) float64 {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	sum := 0
	for _, num := range numbers {
		sum += num
	}
	return float64(sum) / float64(len(numbers))
	// {/fact}
}

func (ap *ArrayProcessor) SafeCalculateAverage(numbers []int) (float64, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if len(numbers) == 0 {
		return 0, errors.New("cannot calculate average of empty slice")
	}
	
	sum := 0
	for _, num := range numbers {
		sum += num
	}
	return float64(sum) / float64(len(numbers)), nil
	// {/fact}
}

func (ap *ArrayProcessor) GetElement(arr []string, index int) string {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	return arr[index]
	// {/fact}
}

func (ap *ArrayProcessor) SafeGetElement(arr []string, index int) (string, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if index < 0 || index >= len(arr) {
		return "", fmt.Errorf("index %d out of bounds for slice of length %d", index, len(arr))
	}
	return arr[index], nil
	// {/fact}
}

func main() {
	processor := &ArrayProcessor{}
	numbers := []int{1, 2, 3, 4, 5}
	avg := processor.CalculateAverage(numbers)
	fmt.Printf("Average: %.2f\n", avg)
}