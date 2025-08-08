//{fact rule=type-confusion@1.0 defects=1}

var app = require("express")(),
  path = require("path");

app.get("/user-files", function(req: { param: (arg0: string) => any; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; sendFile: (arg0: any) => void; }) {
  var file = req.param("file");
  if (file.indexOf("..") !== -1) {
    // BAD
    // we forbid relative paths that contain ..
    // as these could leave the public directory
    res.status(400).send("Bad request");
  } else {
    var absolute = path.resolve("/public/" + file);
    console.log("Sending file: %s", absolute);
    res.sendFile(absolute);
  }
});


//{/fact}