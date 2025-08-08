//{fact rule=session-fixation@v1.0 defects=0}

import express from 'express';
import session from 'express-session';
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: 'keyboard cat'
}));

app.post('/login', function (req: { body: { username: string; password: string; }; session: { regenerate: (arg0: (err: any) => void) => void; authenticated: boolean; }; }, res: { send: (arg0: string) => void; redirect: (arg0: string) => void; }) {
    // Check that username password matches
    if (req.body.username === 'admin' && req.body.password === 'admin') {
        req.session.regenerate(function (err: any) {
            if (err) {
                res.send('Error');
            } else {
                req.session.authenticated = true;
                res.redirect('/');
            }
        });
    } else {
        res.redirect('/login');
    }
});

//{/fact}