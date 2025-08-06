package main

import "fmt"

type ConfigParser struct {
	// {fact rule=code-quality-naming@v1.0 defects=1}
	cfg    map[string]string
	loaded bool
	file   string
	// {/fact}
	
	// {fact rule=code-quality-naming@v1.0 defects=0}
	configurationData map[string]string
	isLoaded          bool
	configFilePath    string
	// {/fact}
}

func NewConfigParser() *ConfigParser {
	return &ConfigParser{
		cfg: make(map[string]string),
	}
}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (cp *ConfigParser) load(f string) bool {
	cp.file = f
	cp.cfg["key1"] = "value1"
	cp.cfg["key2"] = "value2"
	cp.loaded = true
	return true
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (cp *ConfigParser) LoadConfigurationFile(configFilePath string) bool {
	cp.configFilePath = configFilePath
	cp.configurationData = make(map[string]string)
	cp.configurationData["key1"] = "value1"
	cp.configurationData["key2"] = "value2"
	cp.isLoaded = true
	return true
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (cp *ConfigParser) get(k string) string {
	return cp.cfg[k]
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (cp *ConfigParser) GetConfigurationValue(configurationKey string) string {
	return cp.configurationData[configurationKey]
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (cp *ConfigParser) set(k, v string) {
	cp.cfg[k] = v
}
// {/fact}

func main() {
	parser := NewConfigParser()
	parser.load("config.ini")
	value := parser.get("database_host")
	fmt.Printf("Host: %s\n", value)
}