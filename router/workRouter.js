/*
    File: workRouter
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: router file for 'work' table
*/

var express = require('express'),
    workService = require('../service/workService'),
    workRouter = express.Router();

//TODO : setting auth check as middleware for every API

workRouter
    .route('/')
    .get(workService.getAll)
    .post(workService.addOne);

workRouter
    .route('/workId/:id')
    .get(workService.getById)
    .put(workService.changeById)
    .delete(workService.removeById)

workRouter
     .route("/empId/:id")
     .get(workService.getByEId)

module.exports = workRouter;

