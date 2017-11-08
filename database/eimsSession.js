var expressSession = require('express-session'),
    sessionConfig = require('./../config/config').SESSION,
    client = require('./../database/eimsRedis');

var session = (function sessionAPI(){
    sessionConfig.instance = client;

    return {
        start: start
    }

    function start(app){
        app.use(expressSession(sessionConfig));
        console.log("Session has been activated");
    }

}());

module.exports = session;