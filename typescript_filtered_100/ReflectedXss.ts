//{fact rule=cross-site-scripting@v1.0 defects=1}

var app = require('express')();

app.get('/user/:id', function(req: { params: { id: string; }; }, res: { send: (arg0: string) => void; }) {
  if (!isValidUserId(req.params.id))
    // BAD: a request parameter is incorporated without validation into the response
    res.send("Unknown user: " + req.params.id);
  else
    // TODO: do something exciting
    ;
});


//{/fact}