package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type Config struct {
	DatabaseHost string `json:"database_host"`
	DatabasePort int    `json:"database_port"`
	Timeout      int    `json:"timeout"`
}

type ConfigLoader struct {
	config Config
}

func (cl *ConfigLoader) LoadConfig(filename string) {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	data, _ := os.ReadFile(filename)
	json.Unmarshal(data, &cl.config)
	// {/fact}
}

func (cl *ConfigLoader) SafeLoadConfig(filename string) error {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	if filename == "" {
		return fmt.Errorf("filename cannot be empty")
	}
	
	data, err := os.ReadFile(filename)
	if err != nil {
		return fmt.Errorf("failed to read config file: %w", err)
	}
	
	if err := json.Unmarshal(data, &cl.config); err != nil {
		return fmt.Errorf("failed to parse config: %w", err)
	}
	
	if cl.config.DatabaseHost == "" {
		return fmt.Errorf("database_host is required")
	}
	
	return nil
	// {/fact}
}

func (cl *ConfigLoader) GetValue(key string) string {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	switch key {
	case "database_host":
		return cl.config.DatabaseHost
	case "database_port":
		return fmt.Sprintf("%d", cl.config.DatabasePort)
	default:
		return ""
	}
	// {/fact}
}

func (cl *ConfigLoader) SafeGetValue(key string) (string, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	switch key {
	case "database_host":
		if cl.config.DatabaseHost == "" {
			return "", fmt.Errorf("database_host not configured")
		}
		return cl.config.DatabaseHost, nil
	case "database_port":
		if cl.config.DatabasePort == 0 {
			return "", fmt.Errorf("database_port not configured")
		}
		return fmt.Sprintf("%d", cl.config.DatabasePort), nil
	default:
		return "", fmt.Errorf("unknown configuration key: %s", key)
	}
	// {/fact}
}

func main() {
	loader := &ConfigLoader{}
	loader.LoadConfig("config.json")
	host := loader.GetValue("database_host")
	fmt.Printf("Host: %s\n", host)
}