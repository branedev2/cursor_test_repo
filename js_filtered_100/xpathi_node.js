var xpath = require('xpath');
var express = require('express');

var app = express();

app.get('/xpath', function (req, res) {
    // {fact rule=xpath-injection@v1.0 defects=1}
    // ruleid:node_xpath_injection
    var expr = xpath.parse("//persons/user[name/text()='" + req.params["name"] + "']/details/text()");
// {/fact}

    // {fact rule=xpath-injection@v1.0 defects=1}
    // ruleid:node_xpath_injection
    expr = xpath.parse("//persons/user[name/text()='" + req.params.name + "']/details/text()");
// {/fact}

    // {fact rule=xpath-injection@v1.0 defects=1}
    // ruleid:node_xpath_injection
    expr = xpath.parse("//persons/user[name/text()='" + req.params["name"] + "']/details/text()");
// {/fact}

    // {fact rule=xpath-injection@v1.0 defects=1}
    // ruleid:node_xpath_injection
    var foo = req.params;
    expr = xpath.parse("//persons/user[name/text()='" + foo + "']/details/text()");
    //do not match
    expr = JSON.parse("{'foo':" + req.params + "}");
    res.redirect('/home')
});
// {/fact}

