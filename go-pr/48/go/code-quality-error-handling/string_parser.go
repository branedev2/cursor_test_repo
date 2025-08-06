package main

import (
	"fmt"
	"strconv"
)

type StringParser struct{}

func (sp *StringParser) ParseInteger(str string) int {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	num, _ := strconv.Atoi(str)
	return num
	// {/fact}
}

func (sp *StringParser) SafeParseInteger(str string) (int, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if str == "" {
		return 0, fmt.Errorf("empty string cannot be parsed")
	}
	
	num, err := strconv.Atoi(str)
	if err != nil {
		return 0, fmt.Errorf("failed to parse '%s' as integer: %w", str, err)
	}
	return num, nil
	// {/fact}
}

func (sp *StringParser) ParseFloat(str string) float64 {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	num, _ := strconv.ParseFloat(str, 64)
	return num
	// {/fact}
}

func (sp *StringParser) SafeParseFloat(str string) (float64, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if str == "" {
		return 0, fmt.Errorf("empty string cannot be parsed")
	}
	
	num, err := strconv.ParseFloat(str, 64)
	if err != nil {
		return 0, fmt.Errorf("failed to parse '%s' as float: %w", str, err)
	}
	return num, nil
	// {/fact}
}

func main() {
	parser := &StringParser{}
	num := parser.ParseInteger("123")
	fmt.Printf("Number: %d\n", num)
}