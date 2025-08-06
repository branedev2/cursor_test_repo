class PaymentProcessor {
    processPayment(cardNumber: string, cvv: string, amount: number): boolean {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Processing payment: Card=${cardNumber}, CVV=${cvv}, Amount=${amount}`);
        return true;
        // {/fact}
    }

    secureProcessPayment(cardNumber: string, cvv: string, amount: number): boolean {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        const maskedCard = cardNumber.substring(0, 4) + '****' + cardNumber.substring(cardNumber.length - 4);
        console.log(`Processing payment: Card=${maskedCard}, Amount=${amount}`);
        return true;
        // {/fact}
    }

    logTransaction(transactionId: string, details: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`${transactionId}: ${details}`);
        // {/fact}
    }

    secureLogTransaction(transactionId: string, amount: number): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Transaction ${transactionId} completed: Amount=${amount}`);
        // {/fact}
    }

    processRefund(cardNumber: string, amount: number, reason: string): boolean {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Refund: Card=${cardNumber}, Amount=${amount}, Reason=${reason}`);
        return true;
        // {/fact}
    }

    secureProcessRefund(transactionId: string, amount: number): boolean {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Refund processed: Transaction=${transactionId}, Amount=${amount}`);
        return true;
        // {/fact}
    }
}

const processor = new PaymentProcessor();
processor.processPayment('1234567890123456', '123', 99.99);