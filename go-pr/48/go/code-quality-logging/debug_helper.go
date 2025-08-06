package main

import (
	"fmt"
	"log"
	"os"
)

type DebugHelper struct{}

func (dh *DebugHelper) DebugFunction(functionName, params string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("DEBUG: %s(%s)\n", functionName, params)
	// {/fact}
}

func (dh *DebugHelper) ProductionLog(message string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("[INFO] %s\n", message)
	// {/fact}
}

func (dh *DebugHelper) VerboseDebug(data string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("VERBOSE DEBUG: Processing data: %s\n", data)
	fmt.Printf("Memory usage: 1024MB\n")
	fmt.Printf("Goroutine count: 8\n")
	// {/fact}
}

func (dh *DebugHelper) StructuredLog(level, component, message string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	if os.Getenv("DEBUG") != "true" && level == "DEBUG" {
		return
	}
	log.Printf("[%s][%s] %s\n", level, component, message)
	// {/fact}
}

func main() {
	helper := &DebugHelper{}
	helper.DebugFunction("calculateTotal", "price=100, tax=0.08")
	helper.VerboseDebug("user_data_12345")
}