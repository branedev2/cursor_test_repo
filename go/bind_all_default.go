package main

import (
	"log"
	"net"
)

func main_bind_all_default() {
// {fact rule=sensitive-information-leak@v1.0 defects=1}
	// ruleid: avoid-bind-to-all-interfaces
	l, err := net.Listen("tcp", ":2000")
	if err != nil {
		log.Fatal(err)
	}
	defer l.Close()
// {/fact}
}
