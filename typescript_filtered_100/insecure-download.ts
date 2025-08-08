//{fact rule=untrusted-source-functionality-inclusion@v1.0 defects=1}

import fetch from "node-fetch";
import cp from "child_process";

fetch('http://mydownload.example.org/myscript.sh')
    .then(res => res.text())
    .then(script => cp.execSync(script));

    

//{/fact}
