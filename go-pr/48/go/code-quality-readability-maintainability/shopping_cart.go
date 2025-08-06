package main

import "fmt"

type Item struct {
	Name     string
	Price    float64
	Quantity int
	Category string
	OnSale   bool
}

type ShoppingCart struct{}

func (sc *ShoppingCart) CalculateTotal(items []Item, customerType string, hasLoyaltyCard bool, promoCode string) float64 {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
	total := 0.0
	for _, item := range items {
		itemTotal := item.Price * float64(item.Quantity)
		if item.OnSale {
			itemTotal *= 0.8
		}
		if item.Category == "electronics" && customerType == "VIP" {
			itemTotal *= 0.9
		}
		if item.Category == "clothing" && hasLoyaltyCard {
			itemTotal *= 0.95
		}
		if promoCode == "SAVE10" {
			itemTotal *= 0.9
		}
		if promoCode == "SAVE20" && customerType == "VIP" {
			itemTotal *= 0.8
		}
		total += itemTotal
	}
	if total > 100 && customerType == "VIP" {
		total *= 0.95
	}
	if total > 200 && hasLoyaltyCard {
		total *= 0.98
	}
	if total > 500 {
		total *= 0.97
	}
	return total
	// {/fact}
}

func (sc *ShoppingCart) CalculateTotalReadable(items []Item, customerType string, hasLoyaltyCard bool, promoCode string) float64 {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
	subtotal := sc.calculateSubtotal(items, customerType, hasLoyaltyCard, promoCode)
	totalDiscount := sc.calculateTotalDiscount(subtotal, customerType, hasLoyaltyCard)
	return subtotal * totalDiscount
	// {/fact}
}

func (sc *ShoppingCart) calculateSubtotal(items []Item, customerType string, hasLoyaltyCard bool, promoCode string) float64 {
	subtotal := 0.0
	for _, item := range items {
		itemTotal := sc.calculateItemTotal(item, customerType, hasLoyaltyCard, promoCode)
		subtotal += itemTotal
	}
	return subtotal
}

func (sc *ShoppingCart) calculateItemTotal(item Item, customerType string, hasLoyaltyCard bool, promoCode string) float64 {
	itemTotal := item.Price * float64(item.Quantity)
	
	itemTotal *= sc.getSaleDiscount(item)
	itemTotal *= sc.getCategoryDiscount(item, customerType, hasLoyaltyCard)
	itemTotal *= sc.getPromoDiscount(promoCode, customerType)
	
	return itemTotal
}

func (sc *ShoppingCart) getSaleDiscount(item Item) float64 {
	if item.OnSale {
		return 0.8
	}
	return 1.0
}

func (sc *ShoppingCart) getCategoryDiscount(item Item, customerType string, hasLoyaltyCard bool) float64 {
	if item.Category == "electronics" && customerType == "VIP" {
		return 0.9
	}
	if item.Category == "clothing" && hasLoyaltyCard {
		return 0.95
	}
	return 1.0
}

func (sc *ShoppingCart) getPromoDiscount(promoCode, customerType string) float64 {
	switch promoCode {
	case "SAVE10":
		return 0.9
	case "SAVE20":
		if customerType == "VIP" {
			return 0.8
		}
	}
	return 1.0
}

func (sc *ShoppingCart) calculateTotalDiscount(total float64, customerType string, hasLoyaltyCard bool) float64 {
	discount := 1.0
	
	if total > 500 {
		discount *= 0.97
	} else if total > 200 && hasLoyaltyCard {
		discount *= 0.98
	} else if total > 100 && customerType == "VIP" {
		discount *= 0.95
	}
	
	return discount
}

func main() {
	cart := &ShoppingCart{}
	items := []Item{
		{"Laptop", 999.99, 1, "electronics", false},
		{"Shirt", 29.99, 2, "clothing", true},
	}
	total := cart.CalculateTotal(items, "VIP", true, "SAVE10")
	fmt.Printf("Total: $%.2f\n", total)
}