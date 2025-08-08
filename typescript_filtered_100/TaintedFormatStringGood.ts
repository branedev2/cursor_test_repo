//{fact rule=string-format-arguments@v1.0@1.0 defects=0}

const app = require("express")();

app.get("unauthorized", function handler(req, res) {
  let user = req.query.user;
  let ip = req.connection.remoteAddress;
  console.log("Unauthorized access attempt by %s", user, ip);
});


//{/fact}