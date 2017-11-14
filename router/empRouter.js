/*
    File: empRouter
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Router file for 'emp' table
*/

var express = require('express'),
    empService = require('../service/empService'),
    empRouter = express.Router();

//TODO : setting auth check as middleware for every API

empRouter
    .route('/')
    .get(empService.getAll)
    .post(empService.addOne);

empRouter
    .route('/empId/:id')
    .get(empService.getById)
    .put(empService.changeById)
    .delete(empService.removeById)

//  empRouter
//     .route("/empId/:id")
//     .get( empService.getByEId)

module.exports = empRouter;

