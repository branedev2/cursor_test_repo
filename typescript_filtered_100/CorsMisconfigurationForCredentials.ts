//{fact rule=insecure-cors-policy@v1.0 defects=1}

var https = require('https'),
    url = require('url');

var server = https.createServer(function(){});

server.on('request', function(req: { url: any; }, res: { setHeader: (arg0: string, arg1: boolean) => void; }) {
    let origin = url.parse(req.url, true).query.origin;
     // BAD: attacker can choose the value of origin
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", true);

    // ...
});


//{/fact}
