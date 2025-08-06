package main

import "fmt"

type InventoryManager struct {
	inventory map[string]int
}

func NewInventoryManager() *InventoryManager {
	return &InventoryManager{
		inventory: make(map[string]int),
	}
}

func (im *InventoryManager) ProcessOrder(item string, quantity int, customerType string, isUrgent bool) bool {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
	if _, exists := im.inventory[item]; !exists {
		return false
	}
	if im.inventory[item] < quantity {
		if customerType == "VIP" && isUrgent {
			fmt.Printf("Ordering more %s for VIP customer\n", item)
			im.inventory[item] += quantity * 2
		} else if customerType == "Premium" {
			fmt.Printf("Ordering more %s for Premium customer\n", item)
			im.inventory[item] += quantity
		} else {
			return false
		}
	}
	im.inventory[item] -= quantity
	if customerType == "VIP" {
		fmt.Printf("VIP order processed for %s\n", item)
	} else if customerType == "Premium" {
		fmt.Printf("Premium order processed for %s\n", item)
	} else {
		fmt.Printf("Regular order processed for %s\n", item)
	}
	return true
	// {/fact}
}

func (im *InventoryManager) ProcessOrderReadable(item string, quantity int, customerType string, isUrgent bool) bool {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
	if !im.itemExists(item) {
		return false
	}
	
	if !im.hasEnoughStock(item, quantity) {
		if !im.canRestockForCustomer(customerType, isUrgent) {
			return false
		}
		im.restockItem(item, quantity, customerType, isUrgent)
	}
	
	im.fulfillOrder(item, quantity)
	im.logOrderCompletion(item, customerType)
	
	return true
	// {/fact}
}

func (im *InventoryManager) itemExists(item string) bool {
	_, exists := im.inventory[item]
	return exists
}

func (im *InventoryManager) hasEnoughStock(item string, quantity int) bool {
	return im.inventory[item] >= quantity
}

func (im *InventoryManager) canRestockForCustomer(customerType string, isUrgent bool) bool {
	return (customerType == "VIP" && isUrgent) || customerType == "Premium"
}

func (im *InventoryManager) restockItem(item string, quantity int, customerType string, isUrgent bool) {
	restockAmount := quantity
	if customerType == "VIP" && isUrgent {
		restockAmount = quantity * 2
	}
	im.inventory[item] += restockAmount
	fmt.Printf("Ordering more %s for %s customer\n", item, customerType)
}

func (im *InventoryManager) fulfillOrder(item string, quantity int) {
	im.inventory[item] -= quantity
}

func (im *InventoryManager) logOrderCompletion(item, customerType string) {
	fmt.Printf("%s order processed for %s\n", customerType, item)
}

func main() {
	manager := NewInventoryManager()
	manager.inventory["laptop"] = 10
	success := manager.ProcessOrder("laptop", 2, "VIP", true)
	fmt.Printf("Order success: %t\n", success)
}