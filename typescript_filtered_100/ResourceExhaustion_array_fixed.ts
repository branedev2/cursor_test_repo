//{fact rule=limit-on-request-content-length defects=0}

var http = require("http"),
    url = require("url");

var server = http.createServer(function(req: { url: any; }, res: { statusCode: number; end: (arg0: string) => void; }) {
	var size = parseInt(url.parse(req.url, true).query.size);

	if (size > 1024) {
		res.statusCode = 400;
		res.end("Bad request.");
		return;
	}

	let dogs = new Array(size).fill("dog"); // GOOD

	// ... use the dogs
});


//{/fact}