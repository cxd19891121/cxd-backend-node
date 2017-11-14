/*
    File: searchRoute
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Router file for search 
*/

var express = require('express'),
    searchService = require('../service/searchService'),
    searchRouter = express.Router();


//TODO: search service api design

//TODO : setting auth check as middleware for every API
searchRouter
    .route('/')
    .get(searchService.getAll)
    .post(searchService.addOne);

searchRouter
    .route('/userId/:id')
    .get(searchService.getById)
    .put(searchService.changeById)
    .delete(searchService.removeById)

// searchRouter
//     .route("/empId/:id")
//     .get(searchService.getByEId)

module.exports = searchRouter;

