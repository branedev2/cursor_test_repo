package main

import "fmt"

type CacheManager struct {
	cache          []KeyValue
	efficientCache map[string]string
}

type KeyValue struct {
	Key   string
	Value string
}

func NewCacheManager() *CacheManager {
	return &CacheManager{
		cache:          make([]KeyValue, 0),
		efficientCache: make(map[string]string),
	}
}

func (cm *CacheManager) SetValue(key, value string) {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	for i, pair := range cm.cache {
		if pair.Key == key {
			cm.cache[i].Value = value
			return
		}
	}
	cm.cache = append(cm.cache, KeyValue{Key: key, Value: value})
	// {/fact}
}

func (cm *CacheManager) EfficientSetValue(key, value string) {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	cm.efficientCache[key] = value
	// {/fact}
}

func (cm *CacheManager) GetValue(key string) string {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	for _, pair := range cm.cache {
		if pair.Key == key {
			return pair.Value
		}
	}
	return ""
	// {/fact}
}

func (cm *CacheManager) EfficientGetValue(key string) string {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	return cm.efficientCache[key]
	// {/fact}
}

func (cm *CacheManager) HasKey(key string) bool {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	for _, pair := range cm.cache {
		if pair.Key == key {
			return true
		}
	}
	return false
	// {/fact}
}

func (cm *CacheManager) EfficientHasKey(key string) bool {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	_, exists := cm.efficientCache[key]
	return exists
	// {/fact}
}

func main() {
	manager := NewCacheManager()
	manager.SetValue("user1", "John Doe")
	value := manager.GetValue("user1")
	fmt.Printf("Value: %s\n", value)
}