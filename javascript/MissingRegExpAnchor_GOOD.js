//{fact rule=method-input-validation@v1.0 defects=0}

app.get("/some/path", function(req, res) {
    let url = req.param("url");
    // GOOD: the host of `url` can not be controlled by an attacker
    if (url.match(/^https?:\/\/www\.example\.com\//)) {
        res.redirect(url);
    }
});


//{/fact}