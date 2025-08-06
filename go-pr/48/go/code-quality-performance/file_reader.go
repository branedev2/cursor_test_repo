package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

type FileReader struct{}

func (fr *FileReader) ReadFileContent(filename string) string {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	data, _ := ioutil.ReadFile(filename)
	lines := strings.Split(string(data), "\n")
	content := ""
	for _, line := range lines {
		content += line + "\n"
	}
	return content
	// {/fact}
}

func (fr *FileReader) EfficientReadFileContent(filename string) string {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	data, err := ioutil.ReadFile(filename)
	if err != nil {
		return ""
	}
	return string(data)
	// {/fact}
}

func (fr *FileReader) ReadLines(filename string) []string {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	var lines []string
	file, _ := os.Open(filename)
	defer file.Close()
	
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}
	return lines
	// {/fact}
}

func (fr *FileReader) EfficientReadLines(filename string) []string {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	file, err := os.Open(filename)
	if err != nil {
		return nil
	}
	defer file.Close()
	
	lines := make([]string, 0, 1000) // Pre-allocate capacity
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}
	return lines
	// {/fact}
}

func (fr *FileReader) ProcessLargeFile(filename string) int {
	// {fact rule=code-quality-performance@v1.0 defects=1}
	data, _ := ioutil.ReadFile(filename)
	content := string(data)
	return len(strings.Split(content, "\n"))
	// {/fact}
}

func (fr *FileReader) EfficientProcessLargeFile(filename string) int {
	// {fact rule=code-quality-performance@v1.0 defects=0}
	file, err := os.Open(filename)
	if err != nil {
		return 0
	}
	defer file.Close()
	
	lineCount := 0
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		lineCount++
	}
	return lineCount
	// {/fact}
}

func main() {
	reader := &FileReader{}
	content := reader.ReadFileContent("data.txt")
	fmt.Printf("Read %d characters\n", len(content))
}