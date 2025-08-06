import express from 'express';
const router = express.Router()

// {fact rule=cross-site-scripting@v1.0 defects=1}
router.get('/greeting', (req: { query: { name: any; }; }, res: { send: (arg0: string) => void; }) => {
    // ruleid:express_xss
    const { name } = req.query;
    res.send('<h1> Hello :' + name + "</h1>")
})

//template handle escaping 
router.get('/greet-template', (req: { query: { name: any; }; }, res: { render: (arg0: string, arg1: { user_name: void; }) => void; }) => {
    name = req.query.name
    res.render('index', { user_name: name });
})

module.exports = router
// {/fact}



// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/', function (req: { query: { name: any; }; }, res: { send: (arg0: string) => void; }) {
    // ruleid:express_xss
    var user = req.query.name;

    msg = "Hi " + user
    res.send('Response</br>' + msg);
});

// {/fact}


// {fact rule=cross-site-scripting@v1.0 defects=1}
var msg = '';
app.get('/3', function (req: { query: { name: any; }; }, res: { send: (arg0: string) => void; }) {
    // ruleid:express_xss
    var user = req.query.name;

    msg = "Hi " + user
    res.send('Response</br>' + msg);
});

// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/2', function (req: { query: { name: any; }; }, res: { send: (arg0: string) => void; }) {
    // ruleid:express_xss
    var user = { user: req.query.name };
    res.send('Response</br>' + user.name);
});
// {/fact}


// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/1', function (req: { query: { name: any; }; }, res: { send: (arg0: string) => void; }) {
    // ruleid:express_xss
    var user = req.query.name;
    var msg = [];
    msg.push(user);
    res.send('Response</br>' + msg[0]);
});
// {/fact}


// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/4', function (req: { query: { name: any; }; }, res: { send: (arg0: string) => void; }) {
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
app.get('/', function (req: { query: { name: any; }; }, res: { send: (arg0: string) => void; }) {
    // ruleid:express_xss
    var resp = req.query.name;
    res.send('Response</br>' + resp);
});
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/3', function (req: { query: { name: any; }; }, res: { write: (arg0: string) => void; }) {
    // ruleid:express_xss
    var resp = req.query.name;
    res.write('Response</br>' + resp);
});
// {/fact}


// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/3', function (req: { foo: any; }, res: { write: (arg0: string) => void; }) {
    // ruleid:express_xss
    var resp = req.params.foo;
    var x = 1;
    res.write('Response</br>' + resp);
});
// {/fact}


// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/xss', function (req: { query: { name: string; }; }, res: { write: (arg0: string) => void; }) {
    // ruleid:express_xss
    var html = "ASadad" + req.query.name + "Asdadads"
    res.write('Response</br>' + html);
});
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/xss', function (req: { query: (arg0: string) => string; }, res: { write: (arg0: string) => void; }) {
    // ruleid:express_xss
    res.write('Response</br>' + req.query('doo'));
});
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/xss', function (req: { query: { name: string; }; }, res: { write: (arg0: string) => void; }) {
    // ruleid:express_xss
    res.write('Response</br>' + req.query.name);
});
// {/fact}

// We are considering only non-compliant cases of Semgrep Nodejs dataset in benchmarking for now.
// this case is complaint hence commented out this case.
// {ex-fact rule=cross-site-scripting@v1.0 defects=0}
//app.get('/noxss', function (req, res) {
//    var resp = req.query.name;
//    res.write('Response</br>');
//});
// {/ex-fact}


// We cant be sure if `foo` is taintd or not. GQL considers this case as compliant.
// {fact rule=cross-site-scripting@v1.0 defects=0}
app.get('/noxs2s', function (req: { query: { name: any; }; }, res: { write: (arg0: string) => void; }) {
    var resp = req.query.name;
    res.write('Response</br>' + foo);
});
// {/fact}


// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get('/xss', function (req: { query: { name: any; }; }, res: { write: (arg0: string) => void; }) {
    // ruleid:express_xss
    var resp = req.query.name;
    var html = "ASadad" + resp + "Asdadads"
    res.write('Response</br>' + html);
});
app.listen(8000);
// {/fact}
