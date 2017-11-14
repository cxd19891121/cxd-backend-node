/*
    File: messageService
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Service file for message 
*/

var userModel = require('./../model/userModel');


var messageService = (function messageService() {

    //TODO: setting up message for redis database

        //TODO: message Service API design
        var messageAPI = {
            storeMessage: storeMessage,
            deleteMessageById: deleteMessageById,
            getMessageById: getMessageById,
        }

        /*
        * TODO
        * @functionName storeMessage
        * @description add new message to user
        * @param1  req {object}
        * @param2  res {object}
        * @returns void
        */
        function storeMessage() {

        }

        /*
        * TODO
        * @functionName deleteMessageById
        * @description delete message from database
        * @param   req {object}
        * @param   res {object}
        * @returns void
        */
        function deleteMessageById() {

        }

        /*
        * TODO
        * @functionName getMessageById
        * @description get all message for specific user
        * @param   req {object}
        * @param   res {object}
        * @returns [{object}]
        */
        function getMessageById() {

        }

        return messageAPI;

    })();

module.exports = messageAPI;