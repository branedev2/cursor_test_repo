// Semgrep expects detection for CWE-295 (Improper Certificate Validation). But annotation in this case was for CWE-272 (Least Privilege Violation).
// Annotation is corrected.

var request = require('request');
var use_key = 'e0ee2bc6d1979f49c6437e27b06a0101';

//corresponding function for each api call to tortuga gateway, allows easy calling and can store user key

module.exports = {
// {fact rule=improper-certificate-validation@v1.0 defects=1}
    'status': function (callback) {
        // ruleid:node_tls_reject
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
        request.get('https://dev.app.idt.net/v1/status?user_key=' + use_key, function (err, response, body) {
            if (err) callback(err);

            var status = JSON.parse(body);
            callback(err, status);
        })
    },
// {/fact}

// {fact rule=improper-certificate-validation@v1.0 defects=1}
    'fund': function (json, callback) {
        // ruleid:node_tls_reject
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        request.post({
                uri: 'https://dev.app.idt.net/v1/charges?user_key=' + use_key,
                json: json,
                method: 'POST'
            },
            function (err, response, body) {
                if (err) callback(err);

                callback(err, response);
            })

    },
}
// {/fact}


// {fact rule=improper-certificate-validation@v1.0 defects=1}
var http = require('http');
var curl = require('node-curl');

http.createServer(function (request, response) {

    var url = 'https://url';
    url += request.url;

    console.log(url);


    // ruleid:node_curl_ssl_verify_disable
    curl(url,
        {
            SSL_VERIFYPEER: 0
        },
        function (err) {
            response.end(this.body);
        })

}).listen(8000);
// {/fact}
