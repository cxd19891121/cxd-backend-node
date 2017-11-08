/*
    File: ${NAME}
    project: ${PROJECT_NAME}
    Author: ${USER}
    Description: ${description}
*/

var express = require('express'),
    ${table}Service = require('../service/${serviceFrom}'),
    ${table}Router = express.Router();

${table}Router
    .route('/')
    .get(${table}Service.getAll)
    .post(${table}Service.addOne);

${table}Router
    .route('/${uniqueId}/:id')
    .get(${table}Service.getById)
    .put(${table}Service.changeById)
    .delete(${table}Service.removeById)

// ${table}Router
//     .route("/empId/:id")
//     .get(${table}Service.getByEId)

module.exports = ${table}Router;

