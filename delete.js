let artic = require('./articles.json');
const fs=require('fs');
const log = require('./logger.js');
const logger=fs.createWriteStream('LOG.txt');

module.exports.deleteA = function (req, res, payload, cb) {
    for (let i = 0; i < artic.length; i++) {

        if(payload.a===artic[i].id){
           delete  artic[i];
        }
    }
    let str=  JSON.stringify(artic);
    log.log(logger, '/api/comments/create', payload);
    fs.writeFileSync('articles.json',str);
    cb(null, str);
};