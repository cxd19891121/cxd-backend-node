/*
    File: forget
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: send email for missing password
*/

var express = require('express'),
    forgetService = require('../service/forgetService'),
    forgetRouter = express.Router();

//TODO: forget API design

//TODO : setting auth check as middleware for every API
forgetRouter
    .route('/')
    .get(forgetService.getAll)
    .post(forgetService.addOne);

forgetRouter
    .route('/userId/:id')
    .get(forgetService.getById)
    .put(forgetService.changeById)
    .delete(forgetService.removeById)

// forgetRouter
//     .route("/empId/:id")
//     .get(forgetService.getByEId)

module.exports = forgetRouter;

