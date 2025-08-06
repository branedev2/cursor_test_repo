package main

import (
	"fmt"
	"strings"
)

type ReportGenerator struct{}

func (rg *ReportGenerator) GenerateReport(data []string, format string, includeHeader, includeFooter bool, title string) string {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
	result := ""
	if includeHeader {
		if format == "HTML" {
			result += "<html><head><title>" + title + "</title></head><body><h1>" + title + "</h1>"
		} else if format == "XML" {
			result += "<?xml version=\"1.0\"?><report><title>" + title + "</title>"
		} else {
			result += "=== " + title + " ===\n"
		}
	}
	
	for _, item := range data {
		if format == "HTML" {
			result += "<p>" + item + "</p>"
		} else if format == "XML" {
			result += "<item>" + item + "</item>"
		} else {
			result += item + "\n"
		}
	}
	
	if includeFooter {
		if format == "HTML" {
			result += "</body></html>"
		} else if format == "XML" {
			result += "</report>"
		} else {
			result += "=== End of Report ==="
		}
	}
	return result
	// {/fact}
}

func (rg *ReportGenerator) GenerateReadableReport(data []string, format string, includeHeader, includeFooter bool, title string) string {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
	var report strings.Builder
	
	if includeHeader {
		report.WriteString(rg.generateHeader(format, title))
	}
	
	report.WriteString(rg.generateBody(data, format))
	
	if includeFooter {
		report.WriteString(rg.generateFooter(format))
	}
	
	return report.String()
	// {/fact}
}

func (rg *ReportGenerator) generateHeader(format, title string) string {
	switch format {
	case "HTML":
		return "<html><head><title>" + title + "</title></head><body><h1>" + title + "</h1>"
	case "XML":
		return "<?xml version=\"1.0\"?><report><title>" + title + "</title>"
	default:
		return "=== " + title + " ===\n"
	}
}

func (rg *ReportGenerator) generateBody(data []string, format string) string {
	var body strings.Builder
	for _, item := range data {
		body.WriteString(rg.formatItem(item, format))
	}
	return body.String()
}

func (rg *ReportGenerator) formatItem(item, format string) string {
	switch format {
	case "HTML":
		return "<p>" + item + "</p>"
	case "XML":
		return "<item>" + item + "</item>"
	default:
		return item + "\n"
	}
}

func (rg *ReportGenerator) generateFooter(format string) string {
	switch format {
	case "HTML":
		return "</body></html>"
	case "XML":
		return "</report>"
	default:
		return "=== End of Report ==="
	}
}

func main() {
	generator := &ReportGenerator{}
	data := []string{"Item 1", "Item 2", "Item 3"}
	report := generator.GenerateReport(data, "HTML", true, true, "Test Report")
	fmt.Println(report)
}