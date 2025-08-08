// The Semgrep considers "req.foo" as valid external source, but ways to access data from request is 
// with "req.query", "req.params", "req.body", etc.
// CodeGuru does not consider "req.foo" as external input and avoid giving detection.
// This case is intentional. Commenting out this case.

var express = require('express');
const request = require('request');
var needle = require('needle');
var app = express();
const bent = require('bent')
const getJSON = bent('json')
const getBuffer = bent('buffer')
var urllib = require('urllib');
const http = require('http');
let axios = require('axios');
var http = require('https');
const fetch = require('node-fetch');

// {fact rule=server-side-request-forgery@v1.0 defects=1}
app.get('/', function(req, res) {
    // ruleid:node_ssrf
    request(req.query.name, function(error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
    // {/fact}

    // {fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid:node_ssrf
    needle('get', req.vbody.foo).then(res => {
        console.log(res.body);
    })
        .catch(err => {
            console.error(err);
        });
    // {/fact}


    // // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
    // // ruleid:node_ssrf
    // urllib.request(req.foo, function(err, data, res) {
    //     if (err) {
    //         throw err; // you need to handle error
    //     }
    //     console.log(res.statusCode);
    //     console.log(res.headers);
    //     // data is Buffer instance
    //     console.log(data.toString());
    // });

});
// {/ex-fact}

// {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
app.get('/', function(req, res) {

    // ruleid:node_ssrf
    // needle.get(req.foo, function(error, response) {
    //     if (!error && response.statusCode == 200)
    //         console.log(response.body);
    // });

    // {/ex-fact}

    // // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
    // // ruleid:node_ssrf
    // needle.post(req.foo)
    //     .pipe(out)
    //     .on('finish', () => {
    //         console.log('pipe done');
    //     });

    // //Do not match this
    // needle.get('http://google.com')
    //     .pipe(out)
    //     .on('finish', () => {
    //         console.log('pipe done');
    //     });

    // //Do not match this to reduce false positives
    // needle.get(somvar)
    //     .pipe(out)
    //     .on('finish', () => {
    //         console.log('pipe done');
    //     });

    // // {/ex-fact}

    // // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
    // // ruleid:node_ssrf
    // axios.get(req.foo.bar)
    //     .then(function(response) {
    //         // handle success
    //         console.log(response);
    //     })
    //     .catch(function(error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .finally(function() {
    //         // always executed
    //     });
    // // {/ex-fact}


    // // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
    // // ruleid:node_ssrf
    // let obj = await getJSON(req.foo);
    // // {/ex-fact}

    // // {fact rule=server-side-request-forgery@v1.0 defects=1}
    // // ruleid:node_ssrf
    // let buffer = await getBuffer(req.foo);
    // // {/ex-fact}

    // {fact rule=server-side-request-forgery@v1.0 defects=1}

    // ruleid:node_ssrf
    fetch(req.body.doo, { method: 'POST', body: 'a=1' })
        .then(res => res.json()) // expecting a json response
        .then(json => console.log(json));

});
// {/fact}

// {fact rule=server-side-request-forgery@v1.0 defects=1}

app.listen(8000);

// do not match
needle.get(foo, function(error, response) {
    if (!error && response.statusCode == 200)
        console.log(response.body);
});


var net = require('net');


app.get('/', function(req, res) {
    var client = new net.Socket();
    // ruleid:node_ssrf
    client.connect(1337, req.body.host, function() {
        console.log('Connected');
        client.write('Hello, server! Love, Client.');
    });

    client.on('data', function(data) {
        console.log('Received: ' + data);
        client.destroy(); // kill client after server's response
    });

    client.on('close', function() {
        console.log('Connection closed');
    });

    // {/fact}




    // {ex-fact rule=server-side-request-forgery@v1.0 defects=1}
    // ruleid:node_ssrf
    // const fk = http.get({ host: req.foo });
    // req.end();
    // req.once('response', (res) => {
    //     const ip = req.socket.localAddress;
    //     const port = req.socket.localPort;
    //     console.log(`Your IP address is ${ip} and your source port is ${port}.`);
    //     // Consume response object
    // });

});
// {/ex-fact}