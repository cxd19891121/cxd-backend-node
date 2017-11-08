/*
    File: sessionService
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Service File for session
*/

var userModel = require('./../model/userModel');

var sessionService = (function sessionService() {

        var sessionAPI = {

            getAuthObj : getAuthObj,
            clearSession : clearSession,
            registerSession : registerSession,
            checkAuth: checkAuth,

        }

        function clearSession(req){
            req.session = null;
        }

        function registerSession(req,username){
            req.session.user = username;
        }

        return sessionAPI;

    })();

module.exports = sessionService;