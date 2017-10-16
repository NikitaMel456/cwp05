let artic=require('./articles.json');
const fs=require('fs');
const log = require('./logger.js');
const logger=fs.createWriteStream('LOG.txt');

module.exports.createA=function (req,res,payload,cb) {
    payload.id=Date.now();
    artic.push(payload);
    //logfile.log(file,'/api/articles/create',payload);
    let str=  JSON.stringify(artic);
    log.log(logger, '/api/comments/create', payload);
    fs.writeFileSync('articles.json',str);
    cb(null,str);

}