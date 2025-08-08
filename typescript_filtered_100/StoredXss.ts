//{fact rule=cross-site-scripting@v1.0 defects=1}

var express = require('express'),
    fs = require('fs');

express().get('/list-directory', function(req: any, res: { send: (arg0: string) => void; }) {
    fs.readdir('/public', function (error: any, fileNames: any[]) {
        var list = '<ul>';
        fileNames.forEach((fileName: string) => {
            // BAD: `fileName` can contain HTML elements
            list += '<li>' + fileName + '</li>';
        });
        list += '</ul>'
        res.send(list);
    });
});


//{/fact}