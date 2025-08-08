//{fact rule=cross-site-scripting@v1.0 defects=1}

import express from 'express';
import Ajv from 'ajv';

let app = express();
let ajv = new Ajv();

ajv.addSchema({type: 'object', additionalProperties: {type: 'number'}}, 'pollData');

app.post('/polldata', (req: { body: any; }, res: { send: (arg0: any) => void; }) => {
    if (!ajv.validate('pollData', req.body)) {
        res.send(ajv.errorsText());
    }
});

//{/fact}