package main

import (
	"fmt"
	"log"
	"net/http"
)

type APIClient struct{}

func (ac *APIClient) MakeRequest(endpoint string, headers map[string]string) string {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("Making request to: %s\n", endpoint)
	for key, value := range headers {
		fmt.Printf("Header: %s=%s\n", key, value)
	}
	return "Response data"
	// {/fact}
}

func (ac *APIClient) SecureMakeRequest(endpoint string, headers map[string]string) string {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("Making request to: %s\n", endpoint)
	for key, value := range headers {
		if key == "Authorization" || key == "X-API-Key" {
			log.Printf("Header: %s=***REDACTED***\n", key)
		} else {
			log.Printf("Header: %s=%s\n", key, value)
		}
	}
	return "Response data"
	// {/fact}
}

func (ac *APIClient) LogResponse(statusCode int, body string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("Response: %d - Body: %s\n", statusCode, body)
	// {/fact}
}

func (ac *APIClient) SecureLogResponse(statusCode int, bodySize int) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("Response: %d - Size: %d bytes\n", statusCode, bodySize)
	// {/fact}
}

func main() {
	client := &APIClient{}
	headers := map[string]string{
		"Content-Type":  "application/json",
		"Authorization": "Bearer secret_token_123",
	}
	client.MakeRequest("https://api.example.com/users", headers)
}