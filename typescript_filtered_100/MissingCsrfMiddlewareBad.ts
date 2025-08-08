//{fact rule=cross-site-request-forgery@v1.0 defects=1}

var app = require("express")(),
  cookieParser = require("cookie-parser"),
  passport = require("passport");

app.use(cookieParser());
app.use(passport.authorize({ session: true }));

app.post("/changeEmail", function(req: { cookies: { [x: string]: any; }; }, res: any) {
  let newEmail = req.cookies["newEmail"];
  // ...
});


//{/fact}