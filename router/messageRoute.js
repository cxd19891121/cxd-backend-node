/*
    File: messageRoute
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: route file for message API
*/


var express = require('express'),
    messageService = require('../service/messageService'),
    messageRouter = express.Router();

//TODO : setting auth check as middleware for every API

//TODO: message API design
messageRouter
    .route('/')




module.exports = messageRouter;

