//{fact rule=mass-assignment@v1.0 defects=0}

let express = require('express');
let app = express()

app.put('/todos/:id', (req: { params: { id: any; }; session: { todos: { get: (arg0: any) => any; }; }; sessions: { todos: { set: (arg0: any, arg1: any) => void; }; }; query: { name: any; text: any; }; }, res: { end: (arg0: number) => void; }) => {
    let id = req.params.id;
    let items = req.session.todos.get(id);
    if (!items) {
        items = new Map();
        req.sessions.todos.set(id, items);
    }
    items.set(req.query.name, req.query.text);
    res.end(200);
});

//{/fact}