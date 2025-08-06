interface Item {
    name: string;
    price: number;
    quantity: number;
    category: string;
    onSale: boolean;
}

class ShoppingCart {
    calculateTotal(items: Item[], customerType: string, hasLoyaltyCard: boolean, promoCode: string): number {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        let total = 0;
        for (const item of items) {
            let itemTotal = item.price * item.quantity;
            if (item.onSale) {
                itemTotal *= 0.8;
            }
            if (item.category === 'electronics' && customerType === 'VIP') {
                itemTotal *= 0.9;
            }
            if (item.category === 'clothing' && hasLoyaltyCard) {
                itemTotal *= 0.95;
            }
            if (promoCode === 'SAVE10') {
                itemTotal *= 0.9;
            }
            if (promoCode === 'SAVE20' && customerType === 'VIP') {
                itemTotal *= 0.8;
            }
            total += itemTotal;
        }
        if (total > 100 && customerType === 'VIP') {
            total *= 0.95;
        }
        if (total > 200 && hasLoyaltyCard) {
            total *= 0.98;
        }
        if (total > 500) {
            total *= 0.97;
        }
        return total;
        // {/fact}
    }

    calculateTotalReadable(items: Item[], customerType: string, hasLoyaltyCard: boolean, promoCode: string): number {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        const subtotal = this.calculateSubtotal(items, customerType, hasLoyaltyCard, promoCode);
        const totalDiscount = this.calculateTotalDiscount(subtotal, customerType, hasLoyaltyCard);
        return subtotal * totalDiscount;
        // {/fact}
    }

    private calculateSubtotal(items: Item[], customerType: string, hasLoyaltyCard: boolean, promoCode: string): number {
        return items.reduce((subtotal, item) => {
            return subtotal + this.calculateItemTotal(item, customerType, hasLoyaltyCard, promoCode);
        }, 0);
    }

    private calculateItemTotal(item: Item, customerType: string, hasLoyaltyCard: boolean, promoCode: string): number {
        let itemTotal = item.price * item.quantity;
        
        itemTotal *= this.getSaleDiscount(item);
        itemTotal *= this.getCategoryDiscount(item, customerType, hasLoyaltyCard);
        itemTotal *= this.getPromoDiscount(promoCode, customerType);
        
        return itemTotal;
    }

    private getSaleDiscount(item: Item): number {
        return item.onSale ? 0.8 : 1.0;
    }

    private getCategoryDiscount(item: Item, customerType: string, hasLoyaltyCard: boolean): number {
        if (item.category === 'electronics' && customerType === 'VIP') {
            return 0.9;
        }
        if (item.category === 'clothing' && hasLoyaltyCard) {
            return 0.95;
        }
        return 1.0;
    }

    private getPromoDiscount(promoCode: string, customerType: string): number {
        switch (promoCode) {
            case 'SAVE10':
                return 0.9;
            case 'SAVE20':
                return customerType === 'VIP' ? 0.8 : 1.0;
            default:
                return 1.0;
        }
    }

    private calculateTotalDiscount(total: number, customerType: string, hasLoyaltyCard: boolean): number {
        if (total > 500) {
            return 0.97;
        } else if (total > 200 && hasLoyaltyCard) {
            return 0.98;
        } else if (total > 100 && customerType === 'VIP') {
            return 0.95;
        }
        return 1.0;
    }
}

const cart = new ShoppingCart();
const items: Item[] = [
    { name: 'Laptop', price: 999.99, quantity: 1, category: 'electronics', onSale: false },
    { name: 'Shirt', price: 29.99, quantity: 2, category: 'clothing', onSale: true }
];
const total = cart.calculateTotal(items, 'VIP', true, 'SAVE10');
console.log(`Total: $${total.toFixed(2)}`);