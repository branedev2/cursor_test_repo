//{fact rule=autoescape-disabled@v1.0 defects=1}

var app = require('express')();

app.get('/user/:id', function(req: { params: { id: any; }; }, res: { send: (arg0: string) => void; }) {
	let id = req.params.id;
	id = id.replace(/<|>/g, ""); // BAD
	let userHtml = `<div data-id="${id}">${getUserName(id) || "Unknown name"}</div>`;
	// ...
	res.send(prefix + userHtml + suffix);
});


//{/fact}