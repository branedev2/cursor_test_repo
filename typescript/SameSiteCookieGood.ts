//{fact rule=cross-site-request-forgery@v1.0 defects=0}

import http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader("Set-Cookie", `authKey=${makeAuthkey()}; secure; httpOnly; SameSite=Strict`);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h2>Hello world</h2>');
});

//{/fact}