//{fact rule=cross-site-scripting@v1.0 defects=0}

var escape = require('escape-html');

var app = require('express')();

app.get('/user/:id', function(req: { params: { id: string; }; }, res: { send: (arg0: string) => void; }) {
  if (!isValidUserId(req.params.id))
    // GOOD: request parameter is sanitized before incorporating it into the response
    res.send("Unknown user: " + escape(req.params.id));
  else
    // TODO: do something exciting
    ;
});


//{/fact}