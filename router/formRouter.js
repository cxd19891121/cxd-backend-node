/*
    File: formRouter
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Edit data in form
*/

var express = require('express'),
    formService = require('../service/formService'),
    formRouter = express.Router();


//TODO: API design
formRouter
    .route('/')
    .get(formService.getAll)
    .post(formService.addOne);

//TODO : setting auth check as middleware for every API
formRouter
    .route('/empId/:id')
    .get(formService.getById)
    .put(formService.changeById)
    .delete(formService.removeById)

// formRouter
//     .route("/empId/:id")
//     .get(formService.getByEId)

module.exports = formRouter;

