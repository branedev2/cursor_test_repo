//{fact rule=limit-on-request-content-length defects=1}

var http = require("http"),
    url = require("url");

var server = http.createServer(function(req: { url: any; }, res: any) {
	var delay = parseInt(url.parse(req.url, true).query.delay);

	setTimeout(f, delay); // BAD

});


//{/fact}