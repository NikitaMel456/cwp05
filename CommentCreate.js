const fs=require('fs');
let artic = require('./articles.json');
const log = require('./logger.js');
const logger=fs.createWriteStream('LOG.txt');

module.exports.createC = function (req, res, payload, cb) {
    for (let i = 0; i < artic.length; i++) {
        if (payload.id === artic[i].id) {
            delete payload.id;
            payload.idC = Date.now();
            if (artic[i].commentss === undefined)
                artic[i].commentss = [];
            artic[i].commentss.push(payload);
        }
    }
  let str=  JSON.stringify(artic);
    log.log(logger, '/api/comments/create', payload);
    fs.writeFileSync('articles.json',str);
    cb(null, str);

}