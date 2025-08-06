package main

import (
	"fmt"
	"strings"
)

type SearchEngine struct {
	documents []string
	index     map[string][]int
}

func NewSearchEngine() *SearchEngine {
	return &SearchEngine{
		documents: make([]string, 0),
		index:     make(map[string][]int),
	}
}

func (se *SearchEngine) AddDocument(doc string) {
	se.documents = append(se.documents, doc)
}

func (se *SearchEngine) SearchDocuments(query string) []string {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	var results []string
	for _, doc := range se.documents {
		if strings.Contains(doc, query) {
			results = append(results, doc)
		}
	}
	return results
	// {/fact}
}

func (se *SearchEngine) OptimizedSearchDocuments(query string) []string {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	results := make([]string, 0, len(se.documents)/10)
	
	for _, doc := range se.documents {
		if strings.Contains(doc, query) {
			results = append(results, doc)
		}
	}
	return results
	// {/fact}
}

func (se *SearchEngine) HasDocument(doc string) bool {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	for _, document := range se.documents {
		if document == doc {
			return true
		}
	}
	return false
	// {/fact}
}

func (se *SearchEngine) EfficientHasDocument(doc string) bool {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	docSet := make(map[string]bool)
	for _, document := range se.documents {
		docSet[document] = true
	}
	return docSet[doc]
	// {/fact}
}

func main() {
	engine := NewSearchEngine()
	engine.AddDocument("This is a test document")
	engine.AddDocument("Another document for testing")
	results := engine.SearchDocuments("test")
	fmt.Printf("Found %d documents\n", len(results))
}