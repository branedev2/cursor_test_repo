package main

import (
	"fmt"
	"sort"
)

type DataSorter struct{}

func (ds *DataSorter) BubbleSort(data []int) {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	n := len(data)
	for i := 0; i < n-1; i++ {
		for j := 0; j < n-i-1; j++ {
			if data[j] > data[j+1] {
				data[j], data[j+1] = data[j+1], data[j]
			}
		}
	}
	// {/fact}
}

func (ds *DataSorter) EfficientSort(data []int) {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	sort.Ints(data)
	// {/fact}
}

func (ds *DataSorter) LinearSearch(data []int, target int) int {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	for i := 0; i < len(data); i++ {
		if data[i] == target {
			return i
		}
	}
	return -1
	// {/fact}
}

func (ds *DataSorter) BinarySearch(sortedData []int, target int) int {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	return sort.SearchInts(sortedData, target)
	// {/fact}
}

func (ds *DataSorter) FindMinMax(data []int) (int, int) {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	sorted := make([]int, len(data))
	copy(sorted, data)
	sort.Ints(sorted)
	return sorted[0], sorted[len(sorted)-1]
	// {/fact}
}

func (ds *DataSorter) EfficientFindMinMax(data []int) (int, int) {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	if len(data) == 0 {
		return 0, 0
	}
	
	min, max := data[0], data[0]
	for _, value := range data[1:] {
		if value < min {
			min = value
		}
		if value > max {
			max = value
		}
	}
	return min, max
	// {/fact}
}

func main() {
	sorter := &DataSorter{}
	data := []int{64, 34, 25, 12, 22, 11, 90}
	sorter.BubbleSort(data)
	fmt.Println(data)
}