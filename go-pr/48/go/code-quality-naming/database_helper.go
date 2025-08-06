package main

import "fmt"

type DatabaseHelper struct {
	// {fact rule=code-quality-naming@v1.0 defects=1}
	conn_str string
	is_conn  bool
	max_conn int
	// {/fact}
	
	// {fact rule=code-quality-naming@v1.0 defects=0}
	connectionString string
	isConnected      bool
	maxConnections   int
	// {/fact}
}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (dh *DatabaseHelper) init(cs string, mc int) bool {
	dh.conn_str = cs
	dh.max_conn = mc
	dh.is_conn = true
	return true
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (dh *DatabaseHelper) InitializeConnection(connectionString string, maxConnections int) bool {
	dh.connectionString = connectionString
	dh.maxConnections = maxConnections
	dh.isConnected = true
	return true
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (dh *DatabaseHelper) exec(q string) []string {
	res := []string{"row1", "row2"}
	return res
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (dh *DatabaseHelper) ExecuteQuery(sqlQuery string) []string {
	queryResults := []string{"row1", "row2"}
	return queryResults
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (dh *DatabaseHelper) cls() {
	dh.is_conn = false
}
// {/fact}

func main() {
	helper := &DatabaseHelper{}
	helper.init("localhost:5432", 10)
	results := helper.exec("SELECT * FROM users")
	fmt.Println(results)
}