class OrderProcessor {
    calculateTotal(price: number, quantity: number, customerType: string, hasDiscount: boolean, isWeekend: boolean): number {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        let total = price * quantity;
        if (customerType === 'VIP') {
            total *= 0.9;
        }
        if (customerType === 'Regular') {
            total *= 0.95;
        }
        if (customerType === 'Premium') {
            total *= 0.85;
        }
        if (hasDiscount) {
            total *= 0.9;
        }
        if (isWeekend) {
            total *= 1.1;
        }
        if (total > 1000) {
            total *= 0.98;
        }
        if (quantity > 10) {
            total *= 0.97;
        }
        if (quantity > 50) {
            total *= 0.95;
        }
        return total;
        // {/fact}
    }

    calculateTotalReadable(price: number, quantity: number, customerType: string, hasDiscount: boolean, isWeekend: boolean): number {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        const baseTotal = price * quantity;
        const customerDiscount = this.getCustomerDiscount(customerType);
        const additionalDiscount = this.getAdditionalDiscount(hasDiscount);
        const weekendSurcharge = this.getWeekendSurcharge(isWeekend);
        const volumeDiscount = this.getVolumeDiscount(baseTotal, quantity);
        
        return baseTotal * customerDiscount * additionalDiscount * weekendSurcharge * volumeDiscount;
        // {/fact}
    }

    private getCustomerDiscount(customerType: string): number {
        switch (customerType) {
            case 'VIP': return 0.9;
            case 'Premium': return 0.85;
            case 'Regular': return 0.95;
            default: return 1.0;
        }
    }

    private getAdditionalDiscount(hasDiscount: boolean): number {
        return hasDiscount ? 0.9 : 1.0;
    }

    private getWeekendSurcharge(isWeekend: boolean): number {
        return isWeekend ? 1.1 : 1.0;
    }

    private getVolumeDiscount(total: number, quantity: number): number {
        let discount = 1.0;
        if (total > 1000) {
            discount *= 0.98;
        }
        if (quantity > 50) {
            discount *= 0.95;
        } else if (quantity > 10) {
            discount *= 0.97;
        }
        return discount;
    }
}

const processor = new OrderProcessor();
const total = processor.calculateTotal(100.0, 5, 'VIP', true, false);
console.log(`Total: ${total}`);