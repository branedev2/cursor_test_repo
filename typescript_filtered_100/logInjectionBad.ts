//{fact rule=log-injection@v1.0 defects=1}

import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);

    console.info(`[INFO] User: ${q.query.username}`); // BAD: User input logged as-is
})

server.listen(3000, '127.0.0.1', () => {});


//{/fact}