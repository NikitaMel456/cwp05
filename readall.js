let artic = require('./articles.json');
const log = require('./logger.js');
const fs=require('fs');
const logger=fs.createWriteStream('LOG.txt');

module.exports.readall = function (req, res, payload, cb) {
    for (let i = 0; i < artic.length; i++) {
        console.log('Article id:' + artic[i].id);
        console.log('Author:' + artic[i].author);
        console.log('Comments:' + artic[i].commentss);
        console.log('Date:' + artic[i].date);
        console.log('Text:' + artic[i].text);
        console.log('Title:' + artic[i].title);
        console.log('\n');
    }
    log.log(logger, '/api/comments/create', payload);
    cb(null, artic);
};