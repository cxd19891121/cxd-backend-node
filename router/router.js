/*
    File: router
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: organize all router file
*/

var express = require('express'),
    index   = require('./index'),
    user    = require('./userRouter'),
    work    = require('./workRouter'),
    visa    = require('./visaRouter'),
    edu     = require('./eduRouter'),
    order   = require('./orderRouter'),
    message = require('./messageRoute'),
    router  = express.Router();

//TODO: add forget route for forgetRouter

//TODO: add search route for searchRouter

//TODO: add form route for formRouter
router
    .all('*',corsHandler)
    .use('/',index)
    .use('/user', user)
    .use('/work',work)
    .use('/visa',visa)
    .use('/edu',edu)
    .use('/order',order)
    .use('/message',message)



function corsHandler(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
}


module.exports = router;

