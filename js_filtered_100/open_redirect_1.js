// The Semgrep considers "req.param" and "req.params" both as valid external source, but its deprecated and the correct usage is "req.params"
// CodeGuru only considers "req.params" as a valid external source not "req.param".
// So, this case is improved by changing "param" to "params".

const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
        console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
})

router.post('/sprint18b/frequency', (req, res) => {
    res.redirect('/sprint18b/payment') //GOOD
});

var express = require('express');

var app = express();
// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path', function(req, res) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect
    res.redirect(302, req.param("target"));
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path1', function(req, res) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect
    res.redirect(300, req.params);
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path2', function(req, res) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect
    res.redirect(req.params["target"]);
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path3', function(req, res) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect
    res.redirect(req.body.url);
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path4', function(req, res) {
    // BAD subdomain control
    // ruleid:express_open_redirect
    res.redirect("sdcssf" + req.param("target"));
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path5', function(req, res) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect
    res.redirect(req.param("target") + "/asdad");
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}
app.all(function(req, res) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect2
    res.header("Location", req.params["target"]);
});
// {/fact}

// {fact rule=open-redirect@v1.0 defects=1}

app.all(function(req, res) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect2
    res.header('Location', req.param("foo"));
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}

app.all(function(req, res) {
    // ruleid:express_open_redirect2
    res.writeHead(200, { location: 'foo \rinvalid: bar' + req.params + 'asdadasd', foo: bar });
});

// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.all(function(req, res) {
    // ruleid:express_open_redirect2
    res.writeHead(200, { 'location': req.params });
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.all(function(req, res) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect2
    res.header('location', req.param("bar"));
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.get('/some/path', function(req, res) {
    // ruleid:express_open_redirect
    var target = req.param("target");
    // BAD: sanitization doesn't apply here
    res.redirect(target);
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.get('/foo', function(req, res) {
    // BAD: may be a global redirection
    // ruleid:express_open_redirect
    res.redirect((req.param('action') && req.param('action') != "") ? req.param('action') : "/google_contacts")
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.get('/yet/another/path', function(req, res) {
    // BAD: a request parameter is incorporated without validation into a URL redirect
    // ruleid:express_open_redirect
    res.redirect(`${req.param("target")}/foo`);
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.get('/array/join', function(req, res) {
    // BAD: request input becomes before query string
    // ruleid:express_open_redirect
    res.redirect([req.query.page, '?section=', req.query.section].join(''));
});
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.get('/call', function(req, res) {
    sendUserToUrl(res, req.query.nextUrl);
});

function sendUserToUrl(res, nextUrl) {
    // BAD: value comes from query parameter
    res.redirect(nextUrl);
}
// {/fact}


// {fact rule=open-redirect@v1.0 defects=1}
app.get('/redirect/:user', function(req, res) {

    // ruleid:express_open_redirect
    res.redirect('/' + req.params.user); // BAD - could go to //evil.com
    // {/fact}

    // {fact rule=open-redirect@v1.0 defects=1}
    // ruleid:express_open_redirect
    res.redirect('//' + req.params.user); // BAD - could go to //evil.com
    // {/fact}

    // {fact rule=open-redirect@v1.0 defects=1}
    // ruleid:express_open_redirect
    res.redirect('u' + req.params.user); // BAD - could go to u.evil.com
    // {/fact}

    // {fact rule=open-redirect@v1.0 defects=1}
    // ruleid:express_open_redirect
    res.redirect('Fan999' + req.params.user); // BAD - could go to Fan999.evil.com
    // {/fact}

    // {fact rule=open-redirect@v1.0 defects=1}
    // ruleid:express_open_redirect
    res.redirect('/' + ('/u' + req.params.user)); // BAD - could go to //u.evil.com,
    // {/fact}

    // {ex-fact rule=open-redirect@v1.0 defects=1}
    //do not trigger
    //res.redirect('/' + foo)
});
// {/ex-fact}
