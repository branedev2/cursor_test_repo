// https://www.acunetix.com/blog/articles/automated-detection-of-host-header-attacks/
const express = require('express');
const app = express();

app.get('/', function (req, res) {

    //semgrep string lateral support is pending
    var foo = {
        text: `reset url: https://${req.host}/password_reset/${token}`
    };

    //do not match
    var x = 'https://' + foo
    // do not match
    var x = "https://" + req.foo + "/reset" + foo;
    // do not match
    var x = "https://" + z + "/reset";


// {fact rule=improper-input-validation@v1.0 defects=1}
    // ruleid:host_header_injection
    var url = 'http://' + req.host;
// {/fact}

    // {fact rule=improper-input-validation@v1.0 defects=1}
    // ruleid:host_header_injection
    var reset = 'https://' + req.host + '/password_reset';
// {/fact}

    // {fact rule=improper-input-validation@v1.0 defects=1}
    // ruleid:host_header_injection
    var pass = "https://" + req.host + "/reset";
// {/fact}

    // {fact rule=improper-input-validation@v1.0 defects=1}

    // ruleid:host_header_injection
    var z = req.host;
    var pass = "https://" + z + "/reset";
// {/fact}

    // {fact rule=improper-input-validation@v1.0 defects=1}

    // ruleid:host_header_injection
    var reset_url = "Reset password: <a href='http://" + req.host + "/reset_pass'>Reset</a>";
// {/fact}

    // {fact rule=improper-input-validation@v1.0 defects=1}
    // ruleid:host_header_injection
    var foo = {
        text: 'password: https://' + req.host + '/token/',
        token: 'f2131ASDSADASoo',
    };
// {/fact}

    // {fact rule=improper-input-validation@v1.0 defects=1}

    // ruleid:host_header_injection
    var foo = {
        text: 'reset password: https://' + req['host'] + '/token/',
        token: 'f2131ASDSADASoo',
    };
// {/fact}

    // {fact rule=improper-input-validation@v1.0 defects=1}

    // ruleid:host_header_injection
    let x = "https://" + req['host'] + "/reset" + foo;
// {/fact}

    // {fact rule=improper-input-validation@v1.0 defects=1}
    // ruleid:host_header_injection
    x = "https://" + req("host") + "/reset" + foo + 'barr' + foo2;
// {/fact}

    // {fact rule=improper-input-validation@v1.0 defects=1}

    // ruleid:host_header_injection
    var foo = {
        text: 'reset password: https://' + req.host + '/resettoken/' + foo,
        token: 'f2131ASDSADASoo',
    };
// {/fact}


});
