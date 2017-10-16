module.exports.log=function (logfile,url, data) {
    let date=new Date();
    logfile.write(date+'. Url:'+url+'\n'+' Clinet request: '+JSON.stringify(data));}
