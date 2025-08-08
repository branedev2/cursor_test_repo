var express = require('express');
var app = express();
app.get('/', function (req, res) {
    // {fact rule=code-injection@v1.0 defects=1}
    // ruleid:eval_nodejs
    var resp = eval("(" + req.query.name + ")");
// {/fact}

    // {fact rule=code-injection@v1.0 defects=1}
    // ruleid:eval_nodejs
    var z = new Function('arg1', 'arg2', req.query.name)
    z(1, 2);
// {/fact}

    // {fact rule=code-injection@v1.0 defects=1}
    // ruleid:eval_nodejs
    setTimeout('alert(' + req.body.name, 0);
// {/fact}

    // {fact rule=code-injection@v1.0 defects=1}
    // ruleid:eval_nodejs
    setInterval(req.body.name, 0);
    res.send('Response</br>');
});
// {/fact}

app.listen(8000);
eval("outside_express" + req.foo)
setTimeout('alert(' + req.body.name, 0);
setInterval(req.body.name, 0);
new Function('arg1', 'arg2', req.query.name)