package main

import (
	"html/template"
	"net/http"
	"fmt"
)

// {fact rule=cross-site-scripting@v1.0 defects=1}
func Concat_2(r *http.Request) template.JS {
	customerId := r.URL.Query().Get("id")
	// ruleid: unescaped-data-in-js
	tmpl := "<html><body><h1>" + customerId + "</h1></body></html>"
	return template.JS(tmpl)
}
// {/fact}

func main_js() {
	fmt.Println("Hello world!")
 }