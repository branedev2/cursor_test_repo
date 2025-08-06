package main

import (
	"errors"
	"fmt"
	"math"
)

type Calculator struct{}

func (c *Calculator) Divide(a, b float64) float64 {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	return a / b
	// {/fact}
}

func (c *Calculator) SafeDivide(a, b float64) (float64, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if b == 0 {
		return 0, errors.New("division by zero")
	}
	return a / b, nil
	// {/fact}
}

func (c *Calculator) SquareRoot(value float64) float64 {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	return math.Sqrt(value)
	// {/fact}
}

func (c *Calculator) SafeSquareRoot(value float64) (float64, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if value < 0 {
		return 0, errors.New("cannot calculate square root of negative number")
	}
	return math.Sqrt(value), nil
	// {/fact}
}

func (c *Calculator) Logarithm(value float64) float64 {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	return math.Log(value)
	// {/fact}
}

func (c *Calculator) SafeLogarithm(value float64) (float64, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if value <= 0 {
		return 0, errors.New("logarithm undefined for non-positive numbers")
	}
	return math.Log(value), nil
	// {/fact}
}

func main() {
	calc := &Calculator{}
	result := calc.Divide(10, 2)
	fmt.Printf("Result: %.2f\n", result)
}