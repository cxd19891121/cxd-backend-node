/*
    File: eduRouter
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Router file for 'edu' table
*/

var express = require('express'),
    eduService = require('../service/eduService'),
    eduRouter = express.Router();

//TODO : setting auth check as middleware for every API

eduRouter
    .route('/')
    .get(eduService.getAll)
    .post(eduService.addOne);

eduRouter
    .route('/eduId/:id')
    .get(eduService.getById)
    .put(eduService.changeById)
    .delete(eduService.removeById)

eduRouter
    .route("/empId/:id")
    .get(eduService.getByEId)

module.exports = eduRouter;

