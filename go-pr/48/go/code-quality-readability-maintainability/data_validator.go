package main

import (
	"fmt"
	"regexp"
	"strings"
	"unicode"
)

type DataValidator struct{}

func (dv *DataValidator) ValidateUserInput(email, phone string, age int, name string) bool {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
	if email == "" || !strings.Contains(email, "@") || !strings.Contains(email, ".") {
		return false
	}
	if phone == "" || len(phone) < 10 || len(phone) > 15 {
		return false
	}
	if age < 0 || age > 150 {
		return false
	}
	if name == "" || len(name) < 2 || len(name) > 50 {
		return false
	}
	for _, c := range phone {
		if !unicode.IsDigit(c) && c != '-' && c != ' ' && c != '(' && c != ')' {
			return false
		}
	}
	for _, c := range name {
		if !unicode.IsLetter(c) && c != ' ' && c != '-' && c != '\'' {
			return false
		}
	}
	return true
	// {/fact}
}

func (dv *DataValidator) ValidateUserInputReadable(email, phone string, age int, name string) bool {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
	return dv.isValidEmail(email) &&
		dv.isValidPhone(phone) &&
		dv.isValidAge(age) &&
		dv.isValidName(name)
	// {/fact}
}

func (dv *DataValidator) isValidEmail(email string) bool {
	if email == "" {
		return false
	}
	emailPattern := `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
	matched, _ := regexp.MatchString(emailPattern, email)
	return matched
}

func (dv *DataValidator) isValidPhone(phone string) bool {
	if phone == "" || len(phone) < 10 || len(phone) > 15 {
		return false
	}
	
	for _, c := range phone {
		if !unicode.IsDigit(c) && c != '-' && c != ' ' && c != '(' && c != ')' {
			return false
		}
	}
	return true
}

func (dv *DataValidator) isValidAge(age int) bool {
	return age >= 0 && age <= 150
}

func (dv *DataValidator) isValidName(name string) bool {
	if name == "" || len(name) < 2 || len(name) > 50 {
		return false
	}
	
	for _, c := range name {
		if !unicode.IsLetter(c) && c != ' ' && c != '-' && c != '\'' {
			return false
		}
	}
	return true
}

func main() {
	validator := &DataValidator{}
	isValid := validator.ValidateUserInput("test@email.com", "123-456-7890", 25, "John Doe")
	fmt.Printf("Valid: %t\n", isValid)
}