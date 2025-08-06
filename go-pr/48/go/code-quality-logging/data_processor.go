package main

import (
	"fmt"
	"log"
)

type DataProcessor struct{}

func (dp *DataProcessor) ProcessUserData(userData []string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	for _, data := range userData {
		fmt.Printf("Processing user data: %s\n", data)
	}
	// {/fact}
}

func (dp *DataProcessor) SecureProcessUserData(userData []string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("Processing %d user records\n", len(userData))
	// {/fact}
}

func (dp *DataProcessor) LogSQLQuery(query string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("Executing SQL: %s\n", query)
	// {/fact}
}

func (dp *DataProcessor) LogSQLQuerySecure(operation string, recordCount int) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("SQL operation: %s affected %d records\n", operation, recordCount)
	// {/fact}
}

func (dp *DataProcessor) ProcessSensitiveData(ssn, creditCard string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("Processing SSN: %s, Credit Card: %s\n", ssn, creditCard)
	// {/fact}
}

func (dp *DataProcessor) SecureProcessSensitiveData(recordID string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("Processing sensitive data for record: %s\n", recordID)
	// {/fact}
}

func main() {
	processor := &DataProcessor{}
	data := []string{"john@email.com", "jane@email.com", "bob@email.com"}
	processor.ProcessUserData(data)
	processor.LogSQLQuery("SELECT * FROM users WHERE email = 'john@email.com'")
}