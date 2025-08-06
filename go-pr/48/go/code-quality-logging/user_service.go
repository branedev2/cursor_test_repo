package main

import (
	"fmt"
	"log"
)

type UserService struct {
	users []string
}

func (us *UserService) AddUser(username, password string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("Adding user: %s with password: %s\n", username, password)
	us.users = append(us.users, username)
	// {/fact}
}

func (us *UserService) SafeAddUser(username, password string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("Adding user: %s\n", username)
	us.users = append(us.users, username)
	// {/fact}
}

func (us *UserService) AuthenticateUser(username, password string) bool {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("Authentication attempt for %s with password %s\n", username, password)
	return true
	// {/fact}
}

func (us *UserService) SafeAuthenticateUser(username, password string) bool {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("Authentication attempt for user: %s\n", username)
	return true
	// {/fact}
}

func main() {
	service := &UserService{}
	service.AddUser("john_doe", "secret123")
	service.AuthenticateUser("john_doe", "secret123")
}