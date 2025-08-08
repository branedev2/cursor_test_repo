//{fact rule=mass-assignment@v1.0 defects=1}

let express = require('express');
let app = express()

app.put('/todos/:id', (req: { params: { id: any; }; session: { todos: { [x: string]: {}; }; }; query: { name: string | number; text: any; }; }, res: { end: (arg0: number) => void; }) => {
    let id = req.params.id;
    let items = req.session.todos[id];
    if (!items) {
        items = req.session.todos[id] = {};
    }
    items[req.query.name] = req.query.text;
    res.end(200);
});

//{/fact}