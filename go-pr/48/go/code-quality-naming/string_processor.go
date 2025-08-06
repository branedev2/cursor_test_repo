package main

import (
	"fmt"
	"strings"
)

type StringProcessor struct{}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (sp *StringProcessor) proc(str string) string {
	return strings.ToUpper(str)
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (sp *StringProcessor) ConvertToUpperCase(inputString string) string {
	return strings.ToUpper(inputString)
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (sp *StringProcessor) chk(s1, s2 string) bool {
	return strings.Contains(s1, s2)
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (sp *StringProcessor) ContainsSubstring(mainString, searchString string) bool {
	return strings.Contains(mainString, searchString)
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (sp *StringProcessor) cnt(txt string, ch rune) int {
	c := 0
	for _, x := range txt {
		if x == ch {
			c++
		}
	}
	return c
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (sp *StringProcessor) CountCharacterOccurrences(text string, character rune) int {
	count := 0
	for _, currentChar := range text {
		if currentChar == character {
			count++
		}
	}
	return count
}
// {/fact}

func main() {
	processor := &StringProcessor{}
	result := processor.proc("hello world")
	fmt.Println(result)
}