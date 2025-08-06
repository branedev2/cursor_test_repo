package main

import "fmt"

type HashTable struct {
	buckets      [][]KeyValuePair
	efficientMap map[string]int
}

type KeyValuePair struct {
	Key   string
	Value int
}

func NewHashTable() *HashTable {
	return &HashTable{
		buckets:      make([][]KeyValuePair, 100),
		efficientMap: make(map[string]int),
	}
}

func (ht *HashTable) Insert(key string, value int) {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	bucket := ht.simpleHash(key) % len(ht.buckets)
	for i, pair := range ht.buckets[bucket] {
		if pair.Key == key {
			ht.buckets[bucket][i].Value = value
			return
		}
	}
	ht.buckets[bucket] = append(ht.buckets[bucket], KeyValuePair{Key: key, Value: value})
	// {/fact}
}

func (ht *HashTable) EfficientInsert(key string, value int) {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	ht.efficientMap[key] = value
	// {/fact}
}

func (ht *HashTable) Get(key string) int {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	bucket := ht.simpleHash(key) % len(ht.buckets)
	for _, pair := range ht.buckets[bucket] {
		if pair.Key == key {
			return pair.Value
		}
	}
	return -1
	// {/fact}
}

func (ht *HashTable) EfficientGet(key string) int {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	if value, exists := ht.efficientMap[key]; exists {
		return value
	}
	return -1
	// {/fact}
}

func (ht *HashTable) simpleHash(key string) int {
	hash := 0
	for _, c := range key {
		hash += int(c)
	}
	return hash
}

func main() {
	table := NewHashTable()
	table.Insert("key1", 100)
	table.Insert("key2", 200)
	value := table.Get("key1")
	fmt.Printf("Value: %d\n", value)
}