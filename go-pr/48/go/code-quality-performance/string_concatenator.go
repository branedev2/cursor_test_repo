package main

import (
	"fmt"
	"strings"
)

type StringConcatenator struct{}

func (sc *StringConcatenator) ConcatenateStrings(strs []string) string {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	result := ""
	for _, str := range strs {
		result += str
	}
	return result
	// {/fact}
}

func (sc *StringConcatenator) EfficientConcatenateStrings(strs []string) string {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	var builder strings.Builder
	for _, str := range strs {
		builder.WriteString(str)
	}
	return builder.String()
	// {/fact}
}

func (sc *StringConcatenator) BuildLargeString(count int) string {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	result := ""
	for i := 0; i < count; i++ {
		result = result + "data" + fmt.Sprintf("%d", i) + " "
	}
	return result
	// {/fact}
}

func (sc *StringConcatenator) EfficientBuildLargeString(count int) string {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	var builder strings.Builder
	builder.Grow(count * 10) // Pre-allocate capacity
	for i := 0; i < count; i++ {
		builder.WriteString("data")
		builder.WriteString(fmt.Sprintf("%d", i))
		builder.WriteString(" ")
	}
	return builder.String()
	// {/fact}
}

func main() {
	concatenator := &StringConcatenator{}
	data := []string{"Hello", " ", "World", "!"}
	result := concatenator.ConcatenateStrings(data)
	fmt.Println(result)
}