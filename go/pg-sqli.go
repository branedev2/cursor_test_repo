package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/go-pg/pg/v10"
)

// Define the context variable
var ctx = context.Background()

// {fact rule=sql-injection@v1.0 defects=1}
func bad1_pg_sqli(req *http.Request) {
	db := pg.Connect(&pg.Options{
		Addr:     ":5432",
		User:     "user",
		Password: "pass",
		Database: "db_name",
	})
	query := "SELECT name FROM users WHERE age=" + req.FormValue("age")
	// ruleid: pg-sqli
	_, err := db.ExecContext(ctx, query)
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
func bad2_pg_sqli(req *http.Request) {
	opt, err := pg.ParseURL("postgres://user:pass@localhost:5432/db_name")
	if err != nil {
		panic(err)
	}

	db := pg.Connect(opt)

	query := "SELECT name FROM users WHERE age=" + req.FormValue("age")
	// ruleid: pg-sqli
	_, err = db.ExecContext(ctx, query)
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
func bad3_pg_sqli(req *http.Request) {
	opt, err := pg.ParseURL("postgres://user:pass@localhost:5432/db_name")
	if err != nil {
		panic(err)
	}

	db := pg.Connect(opt)
	query := "SELECT name FROM users WHERE age="
	query += req.FormValue("age")
	// ruleid: pg-sqli
	_, err = db.QueryContext(ctx, query, nil)
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
func bad4_pg_sqli(db *pg.DB, email string) {
	query := fmt.Sprintf("SELECT * FROM users WHERE email='%s';", email)
	// ruleid: pg-sqli
	_, err := db.QueryContext(ctx, query, nil)
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
func bad5_pg_sqli(db *pg.DB, req *http.Request) {
	// ruleid: pg-sqli
	_, err := db.ExecContext(ctx, "SELECT name FROM users WHERE age=?", req.FormValue("age"))
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
func bad6_pg_sqli(db *pg.DB, email string) {
	// ruleid: pg-sqli
	_, err := db.QueryContext(ctx, fmt.Sprintf("SELECT * FROM users WHERE email='%s';", email), nil)
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
func ok1_pg_sqli(db *pg.DB) {
	query := "SELECT * FROM users WHERE email='hello';"
	// ok: pg-sqli
	_, err := db.QueryContext(ctx, query, nil)
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
func ok2_pg_sqli(db *pg.DB) {
	query := "SELECT name FROM users WHERE age=" + "3"
	// ok: pg-sqli
	_, err := db.QueryContext(ctx, query, nil)
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
func ok3_pg_sqli(db *pg.DB) {
	query := "SELECT name FROM users WHERE age="
	query += "3"
	// ok: pg-sqli
	_, err := db.QueryContext(ctx, query, nil)
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
func ok4_pg_sqli(db *pg.DB) {
	// ok: pg-sqli
	_, err := db.ExecContext(ctx, "INSERT INTO users(name, email) VALUES($1, $2)",
		"Jon Calhoun", "jon@calhoun.io")
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
func ok5_pg_sqli(db *pg.DB) {
	// ok: pg-sqli
	_, err := db.ExecContext(ctx, "SELECT name FROM users WHERE age=?", "3")
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
func ok6_pg_sqli(db *pg.DB) {
	// ok: pg-sqli
	_, err := db.ExecContext(ctx, "SELECT * FROM users WHERE email='hello';")
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
func ok7_pg_sqli() {
	opt, err := pg.ParseURL("postgres://user:pass@localhost:5432/db_name")
	if err != nil {
		panic(err)
	}

	db := pg.Connect(opt)
	// Note: db.Prepare should be used for queries with placeholders and not for prepared statements directly
	// Since the method signature `db.Prepare` is not available, this part is updated to directly use `db.QueryContext`
	_, err = db.QueryContext(ctx, "select $1::int", 10)
	if err != nil {
		log.Println(err)
	}
}
// {/fact}

func main_pg_sqli() {
    fmt.Println("Hello World")
}
