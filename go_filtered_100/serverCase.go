// Copyright 2021 Praetorian Security, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package main

import (
	"bufio"
	"crypto/rand"
	"crypto/rsa"
	"database/sql"
	"log"
	"net/http"
	"os"
	"os/exec"
)

var (
	db5        *sql.DB
	globalTest int = 500
)
// {fact rule=insecure-connection@v1.0 defects=1}
func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}
// {/fact}
func handler(w http.ResponseWriter, r *http.Request) {

	keys, ok := r.URL.Query()["key"]

	if !ok || len(keys[0]) < 1 {
		log.Println("Url Param 'key' is missing")
		return
	}

	// Query()["key"] will return an array of items,
	// we only want the single item.
// {fact rule=path-traversal@v1.0 defects=1}
	// path traversal
	key := keys[0]
	f, _ := os.Create(key)
	f.Close()
	log.Println("Url Param 'key' is: " + string(key))
	os.Open(key)
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
	// sql injection
	reader := bufio.NewReader(os.Stdin)
	hiddenMessage, _ := reader.ReadString('\n')
	db5.Query("SELECT name FROM users WHERE username=" + hiddenMessage)
	db5.Query("SELECT name FROM users WHERE username=" + key)
// {/fact}

	// command injection
	if key == "safe" {
		key = "safe"
	}
	cmd := exec.Command("echo", key, "Yes it is.")
	cmd.Run()
// {fact rule=cryptographic-key-generator@v1.0 defects=1}
	// RSA
	rsa.GenerateKey(rand.Reader, 1050)
// {/fact}

// {fact rule=cryptographic-key-generator@v1.0 defects=1}
	//testing global variable
	rsa.GenerateKey(rand.Reader, globalTest)
// {/fact}
	//from here down should only be false positives

// {fact rule=path-traversal@v1.0 defects=1}
	//directory trav safe scenarios
	tmp := "./list1/images/"
	x := 5
	if x != 5 {
		tmp = "./etc/passwd"
	}
	DirTraversal6(tmp)
	os.Open(temp8(key)) //another false negative here by gosec!!
// {/fact}

// {fact rule=cryptographic-key-generator@v1.0 defects=0}
	// rsa safe scenario
	tmp2 := 200
	tmp3 := 1000
	keylenMultParam(tmp2, tmp3)
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
	//sql safe scenarios
	db5.Query("SELECT name FROM users WHERE username=" + temp7())
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
	db5.Query("SELECT name FROM users WHERE username=" + "dummy")
// {/fact}

// {fact rule=os-command-injection@v1.0 defects=0}
	//command injection safe scenarios
	msg := "This echo is safe."
	exec.Command("echo", msg, "Yes it is.")
// {/fact}

// {fact rule=os-command-injection@v1.0 defects=0}
	exec.Command("echo", temp7(), "Yes it is.")
// {/fact}
}

func keylenMultParam(tmp2 int, tmp3 int) {
	rsa.GenerateKey(rand.Reader, tmp2+tmp3) //gosec false negative??
}



func DirTraversal6(folderPath string) {
	f2, _ := os.Create(folderPath)
	os.Open(folderPath)

	x5 := "safe"
	num := 1000
	cmdInjection(x5, num)
	f2.Close()
}

func temp7() string {
	return "a"
}
func temp8(key string) string {
	return key
}

// {fact rule=os-command-injection@v1.0 defects=0}
func cmdInjection(x string, num int) {
	cmd := exec.Command(x)
	cmd.Run()
	rsa.GenerateKey(rand.Reader, num+50) // false negative in gosec??? Look into this
	db5.Query("SELECT name FROM users WHERE username=" + x)
}
// {/fact}
