package main

import (
	"fmt"
	"log"
)

type ConfigManager struct {
	config map[string]string
}

func NewConfigManager() *ConfigManager {
	return &ConfigManager{
		config: make(map[string]string),
	}
}

func (cm *ConfigManager) LoadConfiguration(filename string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	cm.config["db_password"] = "admin123"
	cm.config["api_key"] = "sk-1234567890abcdef"
	cm.config["encryption_key"] = "secret_key_xyz"
	
	for key, value := range cm.config {
		fmt.Printf("Loaded config: %s = %s\n", key, value)
	}
	// {/fact}
}

func (cm *ConfigManager) SecureLoadConfiguration(filename string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	cm.config["db_password"] = "admin123"
	cm.config["api_key"] = "sk-1234567890abcdef"
	cm.config["encryption_key"] = "secret_key_xyz"
	
	log.Printf("Configuration loaded from %s\n", filename)
	log.Printf("Loaded %d configuration parameters\n", len(cm.config))
	// {/fact}
}

func (cm *ConfigManager) GetConfig(key string) string {
	return cm.config[key]
}

func (cm *ConfigManager) LogConfigAccess(key, value string) {
	// {fact rule=code-quality-logging@v1.0 defects=1}
	fmt.Printf("Accessing config: %s = %s\n", key, value)
	// {/fact}
}

func (cm *ConfigManager) SecureLogConfigAccess(key string) {
	// {fact rule=code-quality-logging@v1.0 defects=0}
	log.Printf("Configuration accessed: %s\n", key)
	// {/fact}
}

func main() {
	manager := NewConfigManager()
	manager.LoadConfiguration("app.conf")
}