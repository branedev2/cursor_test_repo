package main

import (
	"fmt"
	"io/ioutil"
	"os"
)

func main_2() {
}

func test_chmod_1() {
// {fact rule=insecure-file-permissions@v1.0 defects=1}
	// ruleid: incorrect-default-permission
	err := os.Chmod("/tmp/somefile", 0777)
	if err != nil {
		fmt.Println("Error when changing file permissions!")
		return
	}
// {/fact}

// {fact rule=insecure-file-permissions@v1.0 defects=0}
	// ok: incorrect-default-permission
	err = os.Chmod("/tmp/somefile", 0400)
	if err != nil {
		fmt.Println("Error when changing file permissions!")
		return
	}
}
// {/fact}

func test_mkdir_1() {
// {fact rule=insecure-file-permissions@v1.0 defects=1}
	// ruleid: incorrect-default-permission
	err := os.Mkdir("/tmp/mydir", 0777)
	if err != nil {
		fmt.Println("Error when creating a directory!")
		return
	}
// {/fact}

// {fact rule=insecure-file-permissions@v1.0 defects=1}
	// ruleid: incorrect-default-permission
	err = os.MkdirAll("/tmp/mydir", 0777)
	if err != nil {
		fmt.Println("Error when creating a directory!")
		return
	}
// {/fact}

// {fact rule=insecure-file-permissions@v1.0 defects=0}
	// ok: incorrect-default-permission
	err = os.MkdirAll("/tmp/mydir", 0600)
	if err != nil {
		fmt.Println("Error when creating a directory!")
		return
	}
}
// {/fact}
func test_openfile_1() {
// {fact rule=insecure-file-permissions@v1.0 defects=1}
	// ruleid: incorrect-default-permission
	_, err := os.OpenFile("/tmp/thing", os.O_CREATE|os.O_WRONLY, 0666)
	if err != nil {
		fmt.Println("Error opening a file!")
		return
	}
// {/fact}

// {fact rule=insecure-file-permissions@v1.0 defects=0}
	// ok: incorrect-default-permission
	_, err = os.OpenFile("/tmp/thing", os.O_CREATE|os.O_WRONLY, 0600)
	if err != nil {
		fmt.Println("Error opening a file!")
		return
	}
}
// {/fact}

func test_writefile_1() {
// {fact rule=insecure-file-permissions@v1.0 defects=1}
	// ruleid: incorrect-default-permission
	err := ioutil.WriteFile("/tmp/demo2", []byte("This is some data"), 0644)
	if err != nil {
		fmt.Println("Error while writing!")
	}
}
// {/fact}