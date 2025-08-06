package main

import (
	"fmt"
	"strings"
)

type TextFormatter struct{}

func (tf *TextFormatter) FormatText(text string, uppercase, removeSpaces, addPrefix bool, prefix string, addSuffix bool, suffix string) string {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
	result := text
	if uppercase {
		result = strings.ToUpper(result)
	}
	if removeSpaces {
		result = strings.ReplaceAll(result, " ", "")
	}
	if addPrefix {
		result = prefix + result
	}
	if addSuffix {
		result = result + suffix
	}
	return result
	// {/fact}
}

func (tf *TextFormatter) FormatTextReadable(text string, uppercase, removeSpaces, addPrefix bool, prefix string, addSuffix bool, suffix string) string {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
	result := text
	
	result = tf.applyCase(result, uppercase)
	result = tf.applySpaceRemoval(result, removeSpaces)
	result = tf.applyPrefix(result, addPrefix, prefix)
	result = tf.applySuffix(result, addSuffix, suffix)
	
	return result
	// {/fact}
}

func (tf *TextFormatter) applyCase(text string, uppercase bool) string {
	if !uppercase {
		return text
	}
	return strings.ToUpper(text)
}

func (tf *TextFormatter) applySpaceRemoval(text string, removeSpaces bool) string {
	if !removeSpaces {
		return text
	}
	return strings.ReplaceAll(text, " ", "")
}

func (tf *TextFormatter) applyPrefix(text string, addPrefix bool, prefix string) string {
	if addPrefix {
		return prefix + text
	}
	return text
}

func (tf *TextFormatter) applySuffix(text string, addSuffix bool, suffix string) string {
	if addSuffix {
		return text + suffix
	}
	return text
}

func main() {
	formatter := &TextFormatter{}
	result := formatter.FormatText("hello world", true, false, true, ">>> ", true, " <<<")
	fmt.Println(result)
}