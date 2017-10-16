const http = require('http');
const fs=require('fs');
let artJSON=require('./articles.json');
const create=require('./create.js');
const readall=require('./readall.js');
const read=require('./read.js');
const deleteC=require('./delete.js');
const createCom=require('./CommentCreate.js');
const deleteCom=require('./CommentDelete.js');
const hostname = '127.0.0.1';
const port = 3000;
const handlers={
    '/api/articles/create':create.createA,
    '/api/articles/readall':readall.readall,
    '/api/articles/read':read.read,
    '/api/articles/delete':deleteC.deleteA,
    '/api/comments/create':createCom.createC,
    '/api/comments/delete':deleteCom.deleteC
};

const server = http.createServer((req, res) => {
    parseBodyJson(req, (err, payload) => {
        const handler = getHandler(req.url);
        handler(req, res, payload, (err, result) => {
            if (err) {
                res.statusCode = err.code;
                res.setHeader('Content-Type', 'application/json');
                res.end( JSON.stringify(err) );
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');

            res.end( JSON.stringify(result) );
        });
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function getHandler(url) {
    return handlers[url] || notFound;
}



function notFound(req, res, payload, cb) {
    cb({ code: 404, message: 'Not found'});
}

function parseBodyJson(req, cb) {
    let body = [];

    req.on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {
        body = Buffer.concat(body).toString();
        let params = JSON.parse(body);
        cb(null, params);
    });
}