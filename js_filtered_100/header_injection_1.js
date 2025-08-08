// Semgrep considers 'req.foo' as a source of external input and gives detection if input from 'req.foo' is used in
// unsafe API call. But 'req.foo' is mistake in Semgrep case, it should be 'req.params'.
// Corrected the case accordingly.
var server = http.createServer(function (req, res) {
    var bla = 'dsdsd';
    switch (testIndex++) {
        // {fact rule=neutralization-of-http@v1.0 defects=1}
        case 0:
            // ruleid:generic_header_injection
            res.writeHead(200, { test: 'foo \r\ninvalid: bar' + req.params });
            break;
// {/fact}

        case 1:
            // {fact rule=neutralization-of-http@v1.0 defects=1}
            // ruleid:generic_header_injection
            res.writeHead(200, { test: req.params + 'foo \ninvalid: bar' });
            break;
        case 2:
            // {fact rule=neutralization-of-http@v1.0 defects=1}
            // ruleid:generic_header_injection
            res.writeHead(200, { test: 'foo \rinvalid: bar' + req.params + 'asdadasd', foo: bar });
            break;
// {/fact}

        case 3:
            // {fact rule=neutralization-of-http@v1.0 defects=1}
            // ruleid:generic_header_injection
            res.writeHead(200, { test: bla + 'foo \n\n\ninvalid: bar' + req.params });
            break;
// {/fact}

        case 5:
            // {fact rule=neutralization-of-http@v1.0 defects=1}
            // ruleid:generic_header_injection
            res.writeHead(200, { test: bla + 'foo \n\n\ninvalid: bar' + req.params('asd') });
            break;
// {/fact}

        case 4:
            // {fact rule=neutralization-of-http@v1.0 defects=1}
            // ruleid:generic_header_injection
            res.writeHead(200, { test: req.params });
            server.close();
            break;
// {/fact}

        default:
            assert(false);
    }
    res.end('Hi mars!');
});
server.listen(common.PORT);

var express = require('express');
var app = express();
app.get('/', function (req, res) {
    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.writeHead(200, { test: 'foo \r\ninvalid: bar' + req.params });
// {/fact}


    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set('Content-Type', req.query.foo);
// {/fact}

    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set('foo', 'asdad' + req.query.foo);
// {/fact}

    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set(req.query.foo, 'asdadad');
// {/fact}

    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set('asda' + req.query.foo, 'asdadad');
// {/fact}

    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set('asda' + req.query["foo"], 'asdadad');
// {/fact}

    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set('asda' + req.query("foo"), 'asdadad');
// {/fact}

    // {fact rule=neutralization-of-http@v1.0 defects=1}
    // ruleid:generic_header_injection
    res.set({
        'Content-Type': 'text/plain',
        'Content-Length': req.query.foo,
        'ETag': '12345'
    })
    //do not detect
    res.writeHead(200, { tast: ddd })
    res.set(ffff)
});
// {/fact}
