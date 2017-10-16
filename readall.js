let artic = require('./articles.json');
module.exports.readall = function (req, res, payload, cb) {
    let result = [];
    for (let i = 0; i < artic.length; i++) {
        console.log('Article id:' + artic[i].id);
        console.log('Author:' + artic[i].author);
        console.log('Comments:' + artic[i].comments);
        console.log('Date:' + artic[i].date);
        console.log('Text:' + artic[i].text);
        console.log('Title:' + artic[i].title);
        result = {
            ArticleId:
            artic[i].id,
            Author: artic[i].author,
            Comments: artic[i].domments,
            Date: artic[i].date,
            Text: artic[i].text,
            Title: artic[i].title
        };
    }
    cb(null, artic);
};