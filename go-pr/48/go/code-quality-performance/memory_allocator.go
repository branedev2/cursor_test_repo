package main

import "fmt"

type MemoryAllocator struct{}

func (ma *MemoryAllocator) CreateLargeSlice(size int) []int {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	var data []int
	for i := 0; i < size; i++ {
		data = append(data, i)
	}
	return data
	// {/fact}
}

func (ma *MemoryAllocator) EfficientCreateLargeSlice(size int) []int {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	data := make([]int, 0, size)
	for i := 0; i < size; i++ {
		data = append(data, i)
	}
	return data
	// {/fact}
}

func (ma *MemoryAllocator) ProcessData(input []int) {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	for i := 0; i < len(input); i++ {
		var temp []int
		for j := 0; j < 100; j++ {
			temp = append(temp, input[i]+j)
		}
	}
	// {/fact}
}

func (ma *MemoryAllocator) EfficientProcessData(input []int) {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	temp := make([]int, 0, 100)
	
	for _, value := range input {
		temp = temp[:0] // Reset slice but keep capacity
		for j := 0; j < 100; j++ {
			temp = append(temp, value+j)
		}
	}
	// {/fact}
}

func (ma *MemoryAllocator) CopySlice(source []int) []int {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	var destination []int
	for _, value := range source {
		destination = append(destination, value)
	}
	return destination
	// {/fact}
}

func (ma *MemoryAllocator) EfficientCopySlice(source []int) []int {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	destination := make([]int, len(source))
	copy(destination, source)
	return destination
	// {/fact}
}

func main() {
	allocator := &MemoryAllocator{}
	data := allocator.CreateLargeSlice(10000)
	fmt.Printf("Created slice with %d elements\n", len(data))
}