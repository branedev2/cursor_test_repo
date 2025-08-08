//{fact rule=os-command-injection@v1.0 defects=0}

var fs = require('fs');

module.exports = function (name: any) {
    return fs.readFileSync(name).toString();
};

//{/fact}