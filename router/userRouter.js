/*
    Router for 'user'
 */

var express = require('express'),
    service = require("../service/userService"),
    route   = express.Router();

route
    .route('/')
    .get  (service.getAllUser)
    .post (service.addUser);

route
    .route ('/userId/:id')
    .get   (service.getUserById)
    .put   (service.updateUserById)
    .delete(service.deleteUserById);


route
    .get('/first',service.getFirstUser)
    .get('/last', service.getLastUser)
    .get('/username/:name',service.getUserByName)

module.exports = route;
