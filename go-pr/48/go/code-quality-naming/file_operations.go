package main

import (
	"fmt"
	"io/ioutil"
)

type FileOperations struct{}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (fo *FileOperations) rd(f string) (string, bool) {
	c, err := ioutil.ReadFile(f)
	if err != nil {
		return "", false
	}
	return string(c), true
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (fo *FileOperations) ReadFileContent(filename string) (string, bool) {
	content, err := ioutil.ReadFile(filename)
	if err != nil {
		return "", false
	}
	return string(content), true
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (fo *FileOperations) wr(f string, d string) bool {
	err := ioutil.WriteFile(f, []byte(d), 0644)
	return err == nil
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (fo *FileOperations) WriteDataToFile(filename string, data string) bool {
	err := ioutil.WriteFile(filename, []byte(data), 0644)
	return err == nil
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (fo *FileOperations) ex(p string) bool {
	_, err := ioutil.ReadFile(p)
	return err == nil
}
// {/fact}

func main() {
	ops := &FileOperations{}
	content, success := ops.rd("test.txt")
	if success {
		fmt.Println(content)
	}
}