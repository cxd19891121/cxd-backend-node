/*
    File: order
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Router file for 'order' table
*/

var express = require('express'),
    orderService = require('../service/orderService'),
    orderRouter = express.Router();

//TODO : setting auth check as middleware for every API

orderRouter
    .route('/')
    .get(orderService.getAll)
    .post(orderService.addOne);

orderRouter
    .route('/orderId/:id')
    .get(orderService.getById)
    .put(orderService.changeById)
    .delete(orderService.removeById)

orderRouter
    .route("/empId/:id")
    .get(orderService.getByEId)

module.exports = orderRouter;

