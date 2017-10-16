let artic = require('./articles.json');
const log = require('./logger.js');
const fs=require('fs');
const logger=fs.createWriteStream('LOG.txt');

module.exports.read = function (req, res, payload, cb) {
    let result = [];
    for (let i = 0; i < artic.length; i++) {
        if (payload.a === artic[i].id) {
            console.log('Article id:' + artic[i].id);
            console.log('Author:' + artic[i].author);
            console.log('Comments:' + artic[i].commentss);
            console.log('Date:' + artic[i].date);
            console.log('Text:' + artic[i].text);
            console.log('Title:' + artic[i].title);
            result = {
                ArticleId:
                artic[i].id,
                Author: artic[i].author,
                Date: artic[i].date,
                Text: artic[i].text,
                Title: artic[i].title,
                Comments: artic[i].commentss,
            };
        }
    }
    log.log(logger, '/api/comments/create', payload);
    cb(null, result);
};