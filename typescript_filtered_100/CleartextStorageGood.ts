//{fact rule=clear-text-credentials@v1.0 defects=0}

var express = require('express');
var crypto = require('crypto'),
    password = getPassword();

function encrypt(text: any){
  var cipher = crypto.createCipher('aes-256-ctr', password);
  return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
}

var app = express();
app.get('/remember-password', function (req: { param: (arg0: string) => any; }, res: { cookie: (arg0: string, arg1: any) => void; }) {
  let pw = req.param("current_password");
  // GOOD: Encoding the value before setting it.
  res.cookie("password", encrypt(pw));
});


//{/fact}