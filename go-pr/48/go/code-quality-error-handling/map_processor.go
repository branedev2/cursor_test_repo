package main

import (
	"fmt"
)

type MapProcessor struct{}

func (mp *MapProcessor) GetValue(data map[string]interface{}, key string) interface{} {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	return data[key]
	// {/fact}
}

func (mp *MapProcessor) SafeGetValue(data map[string]interface{}, key string) (interface{}, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if data == nil {
		return nil, fmt.Errorf("map is nil")
	}
	if key == "" {
		return nil, fmt.Errorf("key cannot be empty")
	}
	
	value, exists := data[key]
	if !exists {
		return nil, fmt.Errorf("key '%s' not found in map", key)
	}
	return value, nil
	// {/fact}
}

func (mp *MapProcessor) GetString(data map[string]interface{}, key string) string {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	return data[key].(string)
	// {/fact}
}

func (mp *MapProcessor) SafeGetString(data map[string]interface{}, key string) (string, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	value, err := mp.SafeGetValue(data, key)
	if err != nil {
		return "", err
	}
	
	str, ok := value.(string)
	if !ok {
		return "", fmt.Errorf("value for key '%s' is not a string", key)
	}
	return str, nil
	// {/fact}
}

func (mp *MapProcessor) GetInt(data map[string]interface{}, key string) int {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	return data[key].(int)
	// {/fact}
}

func (mp *MapProcessor) SafeGetInt(data map[string]interface{}, key string) (int, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	value, err := mp.SafeGetValue(data, key)
	if err != nil {
		return 0, err
	}
	
	switch v := value.(type) {
	case int:
		return v, nil
	case float64:
		return int(v), nil
	default:
		return 0, fmt.Errorf("value for key '%s' is not a number", key)
	}
	// {/fact}
}

func main() {
	processor := &MapProcessor{}
	data := map[string]interface{}{
		"name": "John",
		"age":  30,
	}
	name := processor.GetValue(data, "name")
	fmt.Printf("Name: %v\n", name)
}