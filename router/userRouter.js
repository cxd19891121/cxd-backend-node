/*
    Router for 'user'
 */

var express = require('express'),
    service = require("../service/userService"),
    route   = express.Router();

route
    .route('/')
    .get  (service.getAll)
    .post (service.addOne);

route
    .route ('/userId/:id')
    .get   (service.getById)
    .put   (service.changeById)
    .delete(service.removeById);


route
    .get('/first',service.getFirst)
    .get('/last', service.getLast)

module.exports = route;
