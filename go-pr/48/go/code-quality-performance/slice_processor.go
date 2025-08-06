package main

import "fmt"

type SliceProcessor struct{}

func (sp *SliceProcessor) ProcessData(input []int) []int {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	var result []int
	for _, value := range input {
		if value > 0 {
			result = append(result, value*2)
		}
	}
	return result
	// {/fact}
}

func (sp *SliceProcessor) EfficientProcessData(input []int) []int {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	result := make([]int, 0, len(input))
	for _, value := range input {
		if value > 0 {
			result = append(result, value*2)
		}
	}
	return result
	// {/fact}
}

func (sp *SliceProcessor) ContainsValue(data []int, target int) bool {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	for i := 0; i < len(data); i++ {
		if data[i] == target {
			return true
		}
	}
	return false
	// {/fact}
}

func (sp *SliceProcessor) EfficientContainsValue(data []int, target int) bool {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	for _, value := range data {
		if value == target {
			return true
		}
	}
	return false
	// {/fact}
}

func (sp *SliceProcessor) RemoveDuplicates(data []int) []int {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	var result []int
	for _, value := range data {
		found := false
		for _, existing := range result {
			if existing == value {
				found = true
				break
			}
		}
		if !found {
			result = append(result, value)
		}
	}
	return result
	// {/fact}
}

func (sp *SliceProcessor) EfficientRemoveDuplicates(data []int) []int {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	seen := make(map[int]bool)
	result := make([]int, 0, len(data))
	
	for _, value := range data {
		if !seen[value] {
			seen[value] = true
			result = append(result, value)
		}
	}
	return result
	// {/fact}
}

func main() {
	processor := &SliceProcessor{}
	data := []int{1, -2, 3, -4, 5}
	result := processor.ProcessData(data)
	fmt.Println(result)
}