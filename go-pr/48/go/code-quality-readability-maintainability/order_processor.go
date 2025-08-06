package main

import "fmt"

type OrderProcessor struct{}

func (op *OrderProcessor) CalculateTotal(price float64, quantity int, customerType string, hasDiscount, isWeekend bool) float64 {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
	total := price * float64(quantity)
	if customerType == "VIP" {
		total *= 0.9
	}
	if customerType == "Regular" {
		total *= 0.95
	}
	if customerType == "Premium" {
		total *= 0.85
	}
	if hasDiscount {
		total *= 0.9
	}
	if isWeekend {
		total *= 1.1
	}
	if total > 1000 {
		total *= 0.98
	}
	if quantity > 10 {
		total *= 0.97
	}
	if quantity > 50 {
		total *= 0.95
	}
	return total
	// {/fact}
}

func (op *OrderProcessor) CalculateTotalReadable(price float64, quantity int, customerType string, hasDiscount, isWeekend bool) float64 {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
	baseTotal := price * float64(quantity)
	customerDiscount := op.getCustomerDiscount(customerType)
	additionalDiscount := op.getAdditionalDiscount(hasDiscount)
	weekendSurcharge := op.getWeekendSurcharge(isWeekend)
	volumeDiscount := op.getVolumeDiscount(baseTotal, quantity)
	
	return baseTotal * customerDiscount * additionalDiscount * weekendSurcharge * volumeDiscount
	// {/fact}
}

func (op *OrderProcessor) getCustomerDiscount(customerType string) float64 {
	switch customerType {
	case "VIP":
		return 0.9
	case "Premium":
		return 0.85
	case "Regular":
		return 0.95
	default:
		return 1.0
	}
}

func (op *OrderProcessor) getAdditionalDiscount(hasDiscount bool) float64 {
	if hasDiscount {
		return 0.9
	}
	return 1.0
}

func (op *OrderProcessor) getWeekendSurcharge(isWeekend bool) float64 {
	if isWeekend {
		return 1.1
	}
	return 1.0
}

func (op *OrderProcessor) getVolumeDiscount(total float64, quantity int) float64 {
	discount := 1.0
	if total > 1000 {
		discount *= 0.98
	}
	if quantity > 50 {
		discount *= 0.95
	} else if quantity > 10 {
		discount *= 0.97
	}
	return discount
}

func main() {
	processor := &OrderProcessor{}
	total := processor.CalculateTotal(100.0, 5, "VIP", true, false)
	fmt.Printf("Total: %.2f\n", total)
}