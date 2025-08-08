//{fact rule=improper-input-validation@v1.0 defects=1}

var express = require('express');
var app = express();

app.get('/findKey', function(req, res) {
  var key = req.param("key"), input = req.param("input");

  // BAD: Unsanitized user input is used to construct a regular expression
  var re = new RegExp("\\b" + key + "=(.*)\n");
});


//{/fact}
