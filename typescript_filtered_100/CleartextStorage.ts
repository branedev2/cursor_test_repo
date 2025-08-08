//{fact rule=insecure-connection@v1.0 defects=1}

import express from "express";

var app = express();
app.get('/remember-password', function (req: { param: (arg0: string) => any; }, res: { cookie: (arg0: string, arg1: any) => void; }) {
  let pw = req.param("current_password");
  // BAD: Setting a cookie value with cleartext sensitive data.
  res.cookie("password", pw);
});


//{/fact}
