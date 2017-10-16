let artic = require('./articles.json');
const log = require('./logger.js');

module.exports.update = function (req, res, payload, cb) {
    let result = [];
    for (let i = 0; i < artic.length; i++) {

        if(payload.a===artic[i].id){


        }
    }
    cb(null, artic);
};