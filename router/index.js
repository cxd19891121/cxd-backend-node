var express = require('express');
    loginService = require('./../service/loginService');

var index = express.Router();

index
    .route('/')
    .get(userResponse)
    .post(userResponse);

//TODO : setting auth check as middleware for every API

index
    .route('/login')
    .post(loginService.login);

index
    .route('/logout')
    .get(loginService.logout);


function userResponse(req,res) {
    res.send("response from index Router");
}

module.exports = index;
