package main

import (
	"fmt"
	"io/ioutil"
	"os"
)

type FileProcessor struct{}

func (fp *FileProcessor) ReadFile(filename string) string {
	// {fact rule=code-quality-error-handling@v1.0 defects=1}
	data, _ := ioutil.ReadFile(filename)
	return string(data)
	// {/fact}
}

func (fp *FileProcessor) SafeReadFile(filename string) (string, error) {
	// {fact rule=code-quality-error-handling@v1.0 defects=0}
	data, err := ioutil.ReadFile(filename)
	if err != nil {
		return "", fmt.Errorf("failed to read file %s: %w", filename, err)
	}
	return string(data), nil
	// {/fact}
}

func main() {
	processor := &FileProcessor{}
	content := processor.ReadFile("data.txt")
	fmt.Println(content)
}