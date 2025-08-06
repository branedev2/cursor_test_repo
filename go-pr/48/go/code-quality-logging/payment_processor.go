package main

import (
	"fmt"
	"log"
)

type PaymentProcessor struct{}

func (pp *PaymentProcessor) ProcessPayment(cardNumber, cvv string, amount float64) bool {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("Processing payment: Card=%s, CVV=%s, Amount=%.2f\n", cardNumber, cvv, amount)
	return true
	// {/fact}
}

func (pp *PaymentProcessor) SecureProcessPayment(cardNumber, cvv string, amount float64) bool {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	maskedCard := cardNumber[:4] + "****" + cardNumber[len(cardNumber)-4:]
	log.Printf("Processing payment: Card=%s, Amount=%.2f\n", maskedCard, amount)
	return true
	// {/fact}
}

func (pp *PaymentProcessor) LogTransaction(transactionID, details string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("%s: %s\n", transactionID, details)
	// {/fact}
}

func (pp *PaymentProcessor) SecureLogTransaction(transactionID string, amount float64) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("Transaction %s completed: Amount=%.2f\n", transactionID, amount)
	// {/fact}
}

func main() {
	processor := &PaymentProcessor{}
	processor.ProcessPayment("1234567890123456", "123", 99.99)
}