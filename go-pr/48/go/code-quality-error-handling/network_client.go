package main

import (
	"fmt"
	"net/http"
	"time"
)

type NetworkClient struct{}

func (nc *NetworkClient) SendRequest(url string) string {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	resp, _ := http.Get(url)
	defer resp.Body.Close()
	return "Response received"
	// {/fact}
}

func (nc *NetworkClient) SafeSendRequest(url string) (string, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if url == "" {
		return "", fmt.Errorf("URL cannot be empty")
	}
	
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Get(url)
	if err != nil {
		return "", fmt.Errorf("failed to send request: %w", err)
	}
	defer resp.Body.Close()
	
	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("request failed with status: %d", resp.StatusCode)
	}
	
	return "Response received", nil
	// {/fact}
}

func main() {
	client := &NetworkClient{}
	response := client.SendRequest("http://api.example.com")
	fmt.Println(response)
}