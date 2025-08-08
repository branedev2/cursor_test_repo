//{fact rule=hardcoded-credentials@v1.0 defects=1}

import pg from "pg";

const client = new pg.Client({
  user: "bob",
  host: "database.server.com",
  database: "mydb",
  password: "correct-horse-battery-staple",
  port: 3211
});
client.connect();


//{/fact}
