//{fact rule=untrusted-source-functionality-inclusion@v1.0 defects=1}

const fetch = require("node-fetch");
const cp = require("child_process");

fetch('http://mydownload.example.org/myscript.sh')
    .then(res => res.text())
    .then(script => cp.execSync(script));

    

//{/fact}
