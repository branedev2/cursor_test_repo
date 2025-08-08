//{fact rule=os-command-injection@v1.0 defects=1}

var cp = require("child_process");

module.exports = function download(path: string, callback: any) {
  cp.exec("wget " + path, callback);
}

//{/fact}