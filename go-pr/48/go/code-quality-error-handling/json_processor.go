package main

import (
	"encoding/json"
	"fmt"
)

type User struct {
	Name  string `json:"name"`
	Email string `json:"email"`
	Age   int    `json:"age"`
}

type JSONProcessor struct{}

func (jp *JSONProcessor) ParseUser(data []byte) User {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	var user User
	json.Unmarshal(data, &user)
	return user
	// {/fact}
}

func (jp *JSONProcessor) SafeParseUser(data []byte) (User, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if len(data) == 0 {
		return User{}, fmt.Errorf("empty JSON data")
	}
	
	var user User
	if err := json.Unmarshal(data, &user); err != nil {
		return User{}, fmt.Errorf("failed to parse JSON: %w", err)
	}
	
	if user.Name == "" {
		return User{}, fmt.Errorf("user name is required")
	}
	
	return user, nil
	// {/fact}
}

func (jp *JSONProcessor) SerializeUser(user User) []byte {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	data, _ := json.Marshal(user)
	return data
	// {/fact}
}

func (jp *JSONProcessor) SafeSerializeUser(user User) ([]byte, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	data, err := json.Marshal(user)
	if err != nil {
		return nil, fmt.Errorf("failed to serialize user: %w", err)
	}
	return data, nil
	// {/fact}
}

func main() {
	processor := &JSONProcessor{}
	jsonData := []byte(`{"name":"John","email":"john@example.com","age":30}`)
	user := processor.ParseUser(jsonData)
	fmt.Printf("User: %+v\n", user)
}