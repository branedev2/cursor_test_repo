// //No external input is being passed to `execSync`. Covering such cases might lead to FPs and rejections by users, which could affect approval rating for CGR. Hence, marked as intentional.
// //{ex-fact rule=os-command-injection@v1.0 defects=1}

// var cp = require("child_process"),
//   path = require("path");
// function cleanupTemp() {
//   let cmd = "rm -rf " + path.join(__dirname, "temp");
//   cp.execSync(cmd); // BAD
// }

// //{/ex-fact}
