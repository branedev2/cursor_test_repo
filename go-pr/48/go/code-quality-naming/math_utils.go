package main

import (
	"fmt"
	"math"
)

type MathUtils struct{}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (mu *MathUtils) avg(nums []float64) float64 {
	s := 0.0
	for _, n := range nums {
		s += n
	}
	return s / float64(len(nums))
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (mu *MathUtils) CalculateAverage(numbers []float64) float64 {
	sum := 0.0
	for _, number := range numbers {
		sum += number
	}
	return sum / float64(len(numbers))
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (mu *MathUtils) dist(x1, y1, x2, y2 float64) float64 {
	dx := x2 - x1
	dy := y2 - y1
	return math.Sqrt(dx*dx + dy*dy)
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (mu *MathUtils) CalculateEuclideanDistance(firstPointX, firstPointY, secondPointX, secondPointY float64) float64 {
	deltaX := secondPointX - firstPointX
	deltaY := secondPointY - firstPointY
	return math.Sqrt(deltaX*deltaX + deltaY*deltaY)
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (mu *MathUtils) isPrime(n int) bool {
	if n <= 1 {
		return false
	}
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}
// {/fact}

func main() {
	utils := &MathUtils{}
	data := []float64{1.0, 2.0, 3.0, 4.0, 5.0}
	average := utils.avg(data)
	fmt.Printf("Average: %.2f\n", average)
}