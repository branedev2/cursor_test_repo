const express = require('express')
const router = express.Router()

// {fact rule=cross-site-scripting@v1.0 defects=1}
router.get('/greeting', (req, res) => {
    // ruleid:express_xss
    const { name } = req.query;
    res.send('<h1> Hello :' + name + "</h1>")
})

//template handle escaping
router.get('/greet-template', (req, res) => {
    name = req.query.name
    res.render('index', { user_name: name });
})

module.exports = router
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/', function(req, res) {
    // ruleid:express_xss
    var user = req.query.name;

    msg = "Hi " + user
    res.send('Response</br>' + msg);
});

// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
var msg = '';
app.get('/3', function(req, res) {
    // ruleid:express_xss
    var user = req.query.name;

    msg = "Hi " + user
    res.send('Response</br>' + msg);
});

// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/2', function(req, res) {
    // ruleid:express_xss
    var user = { user: req.query.name };
    res.send('Response</br>' + user.name);
});
// {/fact}


// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/1', function(req, res) {
    // ruleid:express_xss
    var user = req.query.name;
    var msg = [];
    msg.push(user);
    res.send('Response</br>' + msg[0]);
});
// {/fact}


// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/4', function(req, res) {
    var user = req.query.name;
    var header = "<html>";
    var msg = 'Hi ' + user;
    var footer = "</html>";
    var output = header + msg + footer;
    res.send(output);
});
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
var express = require('express');
var app = express();
app.get('/', function(req, res) {
    // ruleid:express_xss
    var resp = req.query.name;
    res.send('Response</br>' + resp);
});
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/3', function(req, res) {
    // ruleid:express_xss
    var resp = req.query.name;
    res.write('Response</br>' + resp);
});
// {/fact}


// The Semgrep considers "req.foo" as valid external source, but ways to access data from request is
// with "req.query", "req.params", "req.body", etc.
// CodeGuru does not consider "req.foo" as external input and avoid giving detection.
// This case is intentional. Commenting out this case.

// // {ex-fact rule=cross-site-scripting@v1.0 defects=1}
// app.get('/3', function(req, res) {
//     // ruleid:express_xss
//     var resp = req.foo;
//     var x = 1;
//     res.write('Response</br>' + resp);
// });
// // {/ex-fact}


// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/xss', function(req, res) {
    // ruleid:express_xss
    var html = "ASadad" + req.query.name + "Asdadads"
    res.write('Response</br>' + html);
});
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/xss', function(req, res) {
    // ruleid:express_xss
    res.write('Response</br>' + req.query('doo'));
});
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/xss', function(req, res) {
    // ruleid:express_xss
    res.write('Response</br>' + req.query.name);
});
// {/fact}


// The Semgrep considers "foo" as external input, but it's not initialized
// GQL can't convincingly decide if it's external input. GQL considers this case as compliant in order to avoid FPs.
// This case is intentional. Commenting out this case.

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/xss', function(req, res) {
    // ruleid:express_xss
    var resp = req.query.name;
    var html = "ASadad" + resp + "Asdadads"
    res.write('Response</br>' + html);
});
app.listen(8000);
// {/fact}