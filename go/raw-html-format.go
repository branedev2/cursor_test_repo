package injection

import (
    "fmt"
    "log"
    "net/http"
)

func getMovieQuote() map[string]string {
    m := make(map[string]string)
    m["quote"] = "I'll be back."
    m["movie"] = "The Terminator"
    m["year"] = "1984"

    return m
}

// {fact rule=cross-site-scripting@v1.0 defects=0}
func healthCheck(w http.ResponseWriter, r *http.Request) {
    // ok: raw-html-format
    w.Write([]byte("alive"))
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
func indexPage(w http.ResponseWriter, r *http.Request) {
    const template = `
    <html>
    <body>
      <h1>Random Movie Quotes</h1>
      <h2>%s</h2>
      <h4>~%s, %s</h4>
    </body>
    </html>`

    quote := getMovieQuote()

    quoteText := quote["quote"]
    movie := quote["movie"]
    year := quote["year"]

    w.WriteHeader(http.StatusAccepted)
    // ruleid: raw-html-format
    w.Write([]byte(fmt.Sprintf(template, quoteText, movie, year)))
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
func errorPage(w http.ResponseWriter, r *http.Request) {
    params := r.URL.Query()
    urls, ok := params["url"]
    if !ok {
        log.Println("Error")
        return
    }
    url := urls[0]

    const template = `
    <html>
    <body>
      <h1>error; page not found. <a href="%s">go back</a></h1>
    </body>
    </html>`

    w.WriteHeader(http.StatusAccepted)
    // ruleid: raw-html-format
    w.Write([]byte(fmt.Sprintf(template, url)))
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
func errorPage2(w http.ResponseWriter, r *http.Request) {
    params := r.URL.Query()
    urls, ok := params["url"]
    if !ok {
        log.Println("Error")
        return
    }
    url := urls[0]

    const template = `
    <html>
    <body>
      <h1>error; page not found. <a href="%s">go back</a></h1>
    </body>
    </html>`

    w.WriteHeader(http.StatusAccepted)
    // ruleid: raw-html-format
    w.Write([]byte(fmt.Sprintf(template, url)))
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
func errorPage3(w http.ResponseWriter, r *http.Request) {
    params := r.URL.Query()
    urls, ok := params["url"]
    if !ok {
        log.Println("Error")
        return
    }
    url := urls[0]

    const template = `
    <html>
    <body>
      <h1>error; page not found. <a href="%s">go back</a></h1>
    </body>
    </html>`

    w.WriteHeader(http.StatusAccepted)
    // ruleid: raw-html-format
    fmt.Fprintf(w, template, url)
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
func errorPage4(w http.ResponseWriter, r *http.Request) {
    params := r.URL.Query()
    urls, ok := params["url"]
    if !ok {
        log.Println("Error")
        return
    }
    url := urls[0]

    // Correctly format the template string without concatenation
    template := fmt.Sprintf("<html><body><h1>error; page not found. <a href='%s'>go back </a></h1></body></html>", url)

    w.WriteHeader(http.StatusAccepted)
    w.Write([]byte(template))
}
// {/fact}

// {fact rule=insecure-connection@v1.0 defects=1}
func main() {
    http.HandleFunc("/", indexPage)
    http.HandleFunc("/error", errorPage)
    log.Fatal(http.ListenAndServe(":8080", nil))
}
// {/fact}