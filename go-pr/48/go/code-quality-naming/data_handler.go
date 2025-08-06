package main

import "fmt"

type DataHandler struct{}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (dh *DataHandler) proc(d []int, x int) {
	for i := 0; i < len(d); i++ {
		d[i] = d[i] * x
	}
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (dh *DataHandler) MultiplyAllElements(numbers []int, multiplier int) {
	for index := 0; index < len(numbers); index++ {
		numbers[index] = numbers[index] * multiplier
	}
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (dh *DataHandler) chk(s string) bool {
	return len(s) > 0 && len(s) < 100
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (dh *DataHandler) IsValidStringLength(inputString string) bool {
	return len(inputString) > 0 && len(inputString) < 100
}
// {/fact}

func main() {
	handler := &DataHandler{}
	numbers := []int{1, 2, 3, 4, 5}
	handler.proc(numbers, 2)
	fmt.Println(numbers)
}