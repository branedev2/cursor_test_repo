package main

import (
	"errors"
	"fmt"
)

type DatabaseConnector struct {
	connected bool
}

func (db *DatabaseConnector) Connect(host string, port int) {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	db.connected = true
	fmt.Printf("Connected to %s:%d\n", host, port)
	// {/fact}
}

func (db *DatabaseConnector) SafeConnect(host string, port int) error {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if host == "" {
		return errors.New("host cannot be empty")
	}
	if port <= 0 || port > 65535 {
		return errors.New("invalid port number")
	}
	db.connected = true
	fmt.Printf("Connected to %s:%d\n", host, port)
	return nil
	// {/fact}
}

func (db *DatabaseConnector) ExecuteQuery(query string) {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	fmt.Printf("Executing: %s\n", query)
	// {/fact}
}

func (db *DatabaseConnector) SafeExecuteQuery(query string) error {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if !db.connected {
		return errors.New("database not connected")
	}
	if query == "" {
		return errors.New("query cannot be empty")
	}
	fmt.Printf("Executing: %s\n", query)
	return nil
	// {/fact}
}

func main() {
	db := &DatabaseConnector{}
	db.Connect("localhost", 5432)
	db.ExecuteQuery("SELECT * FROM users")
}