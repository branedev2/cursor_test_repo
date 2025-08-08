//{fact rule=output-ignored-on-resultset-next@v1.0 defects=1}

var express = require('express');
var app = express();

var actions = {
  play(data) {
    // ...
  },
  pause(data) {
    // ...
  }
}

app.get('/perform/:action/:payload', function(req, res) {
  let action = actions[req.params.action];
  // BAD: `action` may not be a function
  res.end(action(req.params.payload));
});


//{/fact}