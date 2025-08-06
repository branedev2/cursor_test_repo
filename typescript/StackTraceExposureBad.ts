//{fact rule=stack-trace-exposure@v1.0 defects=1}

var http = require('http');

http.createServer(function onRequest(req: any, res: { statusCode: number; setHeader: (arg0: string, arg1: string) => void; end: (arg0: any) => void; }) {
  var body;
  try {
    body = handleRequest(req);
  }
  catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end(err.stack); // NOT OK
    return;
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Content-Length", body.length);
  res.end(body);
}).listen(3000);


//{/fact}