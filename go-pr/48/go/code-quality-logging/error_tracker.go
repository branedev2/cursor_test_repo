package main

import (
	"fmt"
	"log"
	"time"
)

type ErrorTracker struct{}

func (et *ErrorTracker) LogError(err error, context string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("ERROR: %s in context: %s\n", err.Error(), context)
	// {/fact}
}

func (et *ErrorTracker) StructuredErrorLog(err error, component string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("[ERROR][%s] %s\n", component, err.Error())
	// {/fact}
}

func (et *ErrorTracker) TraceExecution(function, params string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("TRACE: Entering %s with params: %s\n", function, params)
	// {/fact}
}

func (et *ErrorTracker) LogPerformance(operation string, duration time.Duration) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	if duration > time.Second {
		log.Printf("[PERF][WARN] %s took %v\n", operation, duration)
	}
	// {/fact}
}

func (et *ErrorTracker) LogUserAction(userID, action, details string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("User %s performed %s: %s\n", userID, action, details)
	// {/fact}
}

func (et *ErrorTracker) SecureLogUserAction(userID, action string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("[AUDIT] User:%s Action:%s\n", userID, action)
	// {/fact}
}

func main() {
	tracker := &ErrorTracker{}
	tracker.LogError(fmt.Errorf("database connection failed"), "user_data_processing")
	tracker.TraceExecution("calculateTotal", "price=100, tax=0.08")
}