//{fact rule=os-command-injection@v1.0 defects=0}

var cp = require("child_process");

module.exports = function download(path: any, callback: any) {
  cp.execFile("wget", [path], callback);
}

//{/fact}