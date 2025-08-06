// {fact rule=server-side-request-forgery@v1.0 defects=1}
package main

import (
	"net/http"
)

func use(*http.Response) {

}

func handler(w http.ResponseWriter, req *http.Request) {
	target := req.FormValue("target")

	// BAD: `target` is controlled by the attacker
	resp, err := http.Get("https://" + target + ".example.com/data/")
	if err != nil {
		// error handling
	}

	// process request response
	use(resp)
}
// {/fact}

func main() {
	
}
