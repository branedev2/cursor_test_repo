// {fact rule=os-command-injection@v1.0 defects=0}
package main

import (
	"database/sql"
	"os/exec"
)

var db_1 *sql.DB

func run_1(query string) {
	rows, _ := db_1.Query(query)
	var cmdName string
	rows.Scan(&cmdName)
	if cmdName == "mybinary1" || cmdName == "mybinary2" {
		cmd := exec.Command(cmdName)
		_ = cmd
		cmd.Run()
	}
	
}
// {/fact}

func main() {
	
}
