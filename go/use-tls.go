package main

import (
    "net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "text/plain")
    w.Write([]byte("Hello, world!"))
}
// {fact rule=insecure-connection@v1.0 defects=1}
func main_use_tls() {
    http.HandleFunc("/index", Handler)
    // ruleid: use-tls
    http.ListenAndServe(":80", nil)
}
// {/fact}
