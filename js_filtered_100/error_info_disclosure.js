// const express = require('express');
// const app = express();
//
// app.get('/', function (req, res) {
//     try {
//         foo;
//     }
//         // {ex-fact rule=stack-trace-exposure@v1.0 defects=1}
//
//     catch (err) {
//         res.statusCode = 500;
//         res.setHeader("Content-Type", "text/plain");
//         // ruleid:node_error_disclosure
//         res.end(err.stack);
//         return;
//     }
// });
// // {/ex-fact}
//
// // {ex-fact rule=stack-trace-exposure@v1.0 defects=1}
//
// // ruleid:generic_error_disclosure
// try {
//     throw new Error("Something unexpected has occurred.");
// } catch (e) {
//     console.error(e);
// }
// // {/ex-fact}
//
// // {ex-fact rule=stack-trace-exposure@v1.0 defects=1}
//
// // ruleid:generic_error_disclosure
// console.trace("baad")
// // {/ex-fact}