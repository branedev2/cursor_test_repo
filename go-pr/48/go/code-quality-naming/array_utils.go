package main

import (
	"fmt"
	"sort"
)

type ArrayUtils struct{}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (au *ArrayUtils) srt(arr []int) {
	sort.Ints(arr)
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (au *ArrayUtils) SortArrayAscending(integerArray []int) {
	sort.Ints(integerArray)
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (au *ArrayUtils) find(arr []int, val int) int {
	for i, v := range arr {
		if v == val {
			return i
		}
	}
	return -1
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (au *ArrayUtils) FindElementIndex(searchArray []int, targetValue int) int {
	for currentIndex, currentValue := range searchArray {
		if currentValue == targetValue {
			return currentIndex
		}
	}
	return -1
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (au *ArrayUtils) merge(a, b []int) []int {
	result := make([]int, len(a)+len(b))
	copy(result, a)
	copy(result[len(a):], b)
	return result
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (au *ArrayUtils) MergeArrays(firstArray, secondArray []int) []int {
	mergedArray := make([]int, len(firstArray)+len(secondArray))
	copy(mergedArray, firstArray)
	copy(mergedArray[len(firstArray):], secondArray)
	return mergedArray
}
// {/fact}

func main() {
	utils := &ArrayUtils{}
	data := []int{3, 1, 4, 1, 5}
	utils.srt(data)
	index := utils.find(data, 4)
	fmt.Printf("Found at index: %d\n", index)
}