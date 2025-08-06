package main

import (
	"log"
	"net/http"
	"fmt"
)
// {fact rule=exposure-through-directory-listing@v1.0 defects=1}
func dirListing1() {
	fs := http.FileServer(http.Dir(""))
	//ruleid: fs-directory-listing
	log.Fatal(http.ListenAndServe(":9000", fs))
}
// {/fact}

// {fact rule=exposure-through-directory-listing@v1.0 defects=1}
func dirListing2() {
	fs := http.FileServer(http.Dir(""))
	certFile := "/path/tp/my/cert"
	keyFile := "/path/to/my/key"
	//ruleid: fs-directory-listing
	log.Fatal(http.ListenAndServeTLS(":9000", certFile, keyFile, fs))
}
// {/fact}

// {fact rule=exposure-through-directory-listing@v1.0 defects=1}
func dirListing3() {
	fs := http.FileServer(http.Dir(""))
	//ruleid: fs-directory-listing
	http.Handle("/myroute", fs)
}
// {/fact}

// {fact rule=exposure-through-directory-listing@v1.0 defects=1}
func dirListing4() {
	//ruleid: fs-directory-listing
	http.Handle("/myroute", http.FileServer(http.Dir("")))
}
// {/fact}

// {fact rule=exposure-through-directory-listing@v1.0 defects=0}
func noDirListing1() {
	h1 := func(w http.ResponseWriter, _ *http.Request) {
		w.Write([]byte("<h1>Hello!</h1>"))
	}
	//ok: fs-directory-listing
	http.HandleFunc("/myroute", h1)
}
// {/fact}

// {fact rule=exposure-through-directory-listing@v1.0 defects=0}
func noDirListing2() {
	h1 := func(w http.ResponseWriter, _ *http.Request) {
		w.Write([]byte("<h1>Home page</h1>"))
	}
	mux := http.NewServeMux()
	mux.HandleFunc("/", h1)
	//ok: fs-directory-listing
	log.Fatal(http.ListenAndServe(":9000", mux))
}
// {/fact}

func main_fs() {
	fmt.Println("Hello world!")
 }