var express = require('express');
var app = express();
app.get('/view/:id', function (req, res) {

// {fact rule=untrusted-data-in-decision@v1.0 defects=1}
    // ruleid:node_logic_bypass
    if (req.cookies["user"] === req.params["id"]) {
        showProfile();
    }

});
// {/fact}

