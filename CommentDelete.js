let artic = require('./articles.json');
const fs=require('fs');
const log = require('./logger.js');
const logger=fs.createWriteStream('LOG.txt');

module.exports.deleteC = function (req, res, payload, cb) {
    for (let i = 0; i < artic.length; i++) {
        if(payload.id===artic[i].id){
            for(let j=0;j<artic[i].commentss.length;j++){
         if(payload.idC===artic[i].commentss[j].idC)
            delete artic[i].commentss[j];
            }
        }
    }
    let str=  JSON.stringify(artic);
    log.log(logger, '/api/comments/create', payload);
    fs.writeFileSync('articles.json',str);
    cb(null, str);
};