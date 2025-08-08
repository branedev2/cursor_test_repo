//{fact rule=log-injection@v1.0 defects=1}

const app = require("express")();

app.get("unauthorized", function handler(req: { query: { user: any; }; connection: { remoteAddress: any; }; }, res: any) {
  let user = req.query.user;
  let ip = req.connection.remoteAddress;
  console.log("Unauthorized access attempt by " + user, ip);
});


//{/fact}
