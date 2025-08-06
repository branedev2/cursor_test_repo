package main

import (
	"fmt"
	"log"
)

type RequestHandler struct{}

func (rh *RequestHandler) HandleRequest(method, url string, params map[string]string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("Request: %s %s\n", method, url)
	for key, value := range params {
		fmt.Printf("Param: %s=%s\n", key, value)
	}
	// {/fact}
}

func (rh *RequestHandler) SecureHandleRequest(method, url string, params map[string]string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("Request: %s %s\n", method, url)
	log.Printf("Parameters count: %d\n", len(params))
	// {/fact}
}

func (rh *RequestHandler) LogRequestBody(body string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("Request body: %s\n", body)
	// {/fact}
}

func (rh *RequestHandler) SecureLogRequestBody(bodySize int) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("Request body size: %d bytes\n", bodySize)
	// {/fact}
}

func (rh *RequestHandler) LogClientInfo(ip, userAgent string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("Client: IP=%s, UserAgent=%s\n", ip, userAgent)
	// {/fact}
}

func (rh *RequestHandler) SecureLogClientInfo(hashedIP string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("Client request from: %s\n", hashedIP)
	// {/fact}
}

func main() {
	handler := &RequestHandler{}
	params := map[string]string{
		"username": "john_doe",
		"password": "secret123",
	}
	handler.HandleRequest("POST", "/login", params)
}