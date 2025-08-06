class InventoryManager {
    private inventory: Map<string, number> = new Map();

    processOrder(item: string, quantity: number, customerType: string, isUrgent: boolean): boolean {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        if (!this.inventory.has(item)) {
            return false;
        }
        if ((this.inventory.get(item) || 0) < quantity) {
            if (customerType === 'VIP' && isUrgent) {
                console.log(`Ordering more ${item} for VIP customer`);
                this.inventory.set(item, (this.inventory.get(item) || 0) + quantity * 2);
            } else if (customerType === 'Premium') {
                console.log(`Ordering more ${item} for Premium customer`);
                this.inventory.set(item, (this.inventory.get(item) || 0) + quantity);
            } else {
                return false;
            }
        }
        this.inventory.set(item, (this.inventory.get(item) || 0) - quantity);
        if (customerType === 'VIP') {
            console.log(`VIP order processed for ${item}`);
        } else if (customerType === 'Premium') {
            console.log(`Premium order processed for ${item}`);
        } else {
            console.log(`Regular order processed for ${item}`);
        }
        return true;
        // {/fact}
    }

    processOrderReadable(item: string, quantity: number, customerType: string, isUrgent: boolean): boolean {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        if (!this.itemExists(item)) {
            return false;
        }
        
        if (!this.hasEnoughStock(item, quantity)) {
            if (!this.canRestockForCustomer(customerType, isUrgent)) {
                return false;
            }
            this.restockItem(item, quantity, customerType, isUrgent);
        }
        
        this.fulfillOrder(item, quantity);
        this.logOrderCompletion(item, customerType);
        
        return true;
        // {/fact}
    }

    private itemExists(item: string): boolean {
        return this.inventory.has(item);
    }

    private hasEnoughStock(item: string, quantity: number): boolean {
        return (this.inventory.get(item) || 0) >= quantity;
    }

    private canRestockForCustomer(customerType: string, isUrgent: boolean): boolean {
        return (customerType === 'VIP' && isUrgent) || customerType === 'Premium';
    }

    private restockItem(item: string, quantity: number, customerType: string, isUrgent: boolean): void {
        const restockAmount = (customerType === 'VIP' && isUrgent) ? quantity * 2 : quantity;
        this.inventory.set(item, (this.inventory.get(item) || 0) + restockAmount);
        console.log(`Ordering more ${item} for ${customerType} customer`);
    }

    private fulfillOrder(item: string, quantity: number): void {
        this.inventory.set(item, (this.inventory.get(item) || 0) - quantity);
    }

    private logOrderCompletion(item: string, customerType: string): void {
        console.log(`${customerType} order processed for ${item}`);
    }

    addInventory(item: string, quantity: number): void {
        this.inventory.set(item, (this.inventory.get(item) || 0) + quantity);
    }
}

const manager = new InventoryManager();
manager.addInventory('laptop', 10);
const success = manager.processOrder('laptop', 2, 'VIP', true);
console.log(`Order success: ${success}`);