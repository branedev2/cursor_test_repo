const express = require('express');
const lusca = require('lusca');

const app = express();
// {fact rule=protection-mechanism-failure@v1.0 defects=1}
// ruleid:header_xss_lusca
app.use(lusca({
    csrf: true,
    csp: { policy: "referrer no-referrer" },
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    xssProtection: false,
    nosniff: true,
    referrerPolicy: 'same-origin'
}));
// {/fact}

// {fact rule=protection-mechanism-failure@v1.0 defects=1}

app.use(lusca.csrf());
app.use(lusca.csp({ policy: [{ "img-src": "'self' http:" }, "block-all-mixed-content"], reportOnly: false }));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.p3p('ABCDEF'));
app.use(lusca.hsts({ maxAge: 31536000 }));
// ruleid:header_xss_lusca
app.use(lusca.xssProtection(false));
app.use(lusca.nosniff());
app.use(lusca.referrerPolicy('same-origin'));

// {/fact}

app.get('/', function (req, res) {
// {ex-fact rule=protection-mechanism-failure@v1.0 defects=1}
    // ruleid:header_xss_generic
    // var x = 0;
// {/ex-fact}

// {fact rule=protection-mechanism-failure@v1.0 defects=1}
    // ruleid:header_xss_generic
    res.writeHead(200, { 'x-xss-protection': 0 });
// {/fact}

// {fact rule=protection-mechanism-failure@v1.0 defects=1}

    // ruleid:header_xss_generic
    res.set('x-xss-protection', 0);
// {/fact}

// {ex-fact rule=protection-mechanism-failure@v1.0 defects=1}
    //do not match
    // res.set('x-xss-protection', 1);
// {/ex-fact}

// {fact rule=protection-mechanism-failure@v1.0 defects=1}
    // ruleid:header_xss_generic
    res.set('X-XSS-Protection', 0);
// {/fact}

// {fact rule=protection-mechanism-failure@v1.0 defects=1}
    //sgrep bug - https://github.com/returntocorp/sgrep/issues/512
    // ruleid:header_xss_generic
    res.set({
        'Content-Length': req.query.foo,
        'x-xss-protection': 0,
        'ETag': '12345'
    })
// {/fact}

// {fact rule=protection-mechanism-failure@v1.0 defects=1}
    //sgrep bug - https://github.com/returntocorp/sgrep/issues/512
    // ruleid:header_xss_generic
    res.writeHead(200, { 'x-xss-protection': 0 })
    res.set('X-XSS-Protection', x);

    // do not detect
    res.set(ffff)
});
// {/fact}

