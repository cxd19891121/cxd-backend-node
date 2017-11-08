/*
    File: visa
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Router file for 'visa' table
*/

var express = require('express'),
    visaService = require('../service/visaService'),
    visaRouter = express.Router();

visaRouter
    .route('/')
    .get(visaService.getAll)
    .post(visaService.addOne);

visaRouter
    .route('/visaId/:id')
    .get(visaService.getById)
    .put(visaService.changeById)
    .delete(visaService.removeById)

visaRouter
    .route("/empId/:id")
    .get(visaService.getByEId)

module.exports = visaRouter;

