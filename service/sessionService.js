/*
    File: sessionService
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Service File for session
*/


/**
 * Created by xiaodong chen on 12/21/2016.
 */


module.exports = session;

var userModel = require('./../model/userModel');




var sessionService = (function sessionService() {

        var sessionAPI = {
            storeSession: storeSession,
            clearSession: clearSession,
            checkOperationAuth: checkOperationAuth,
        }

        /*
        * TODO
        * @functionName storeSession
        * @description store the user information into session.
        * @param1  req {object}
        * @param2   username {string}
        * @returns void
        */
        function storeSession(req, username){

        }

        /*
        * TODO
        * @functionName clearSession
        * @description clear the session for user
        * @param   req {object}
        * @returns void
        */
        function clearSession(req){

        }

        /*
        * TODO
        * @functionName checkOperationAuth
        * @description check user's authority for specific operation
        * @param   operationTagName {String}
        * @returns function
        */
        function checkOperationAuth(operationTagName){
            return function(req,res,next){

            }

        }






        return sessionAPI;

    })();

module.exports = sessionService;