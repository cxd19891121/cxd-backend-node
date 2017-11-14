/*
    File: searchService
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Service file for search service
*/

var userModel = require('./../model/userModel');

//TODO: setting up for search service
var userService = (function userService() {

    //TODO: search service api design
    var userAPI = {

        //API for '/'
        getAll: getAll,
        addOne: addOne,

        //API for '/userId/:id'
        getById: getById,
        changeById: changeById,
        removeById: removeById,

        //API for '/empId/:id'
        getByEId: getByEId,


    }


    //TODO : search API implementation
    function getAll(req, res) {
        console.log("getAll for user");
        userModel.selectAll(function (e, o) {
            if (e) {
                console.log(e);
                res.status(503).send(e)
            } else {
                res.status(200).send(o.rows);
            }
        })
    }

    function addOne(req, res) {
        console.log("addOne for user");
        var data = req.body[user];
        userModel.insert(data, function (e, o) {
            if (e) {
                console.log(e);
                res.status(503).send(e)
            } else {
                console.log('success added');
                res.status(200).send('success added');
            }
        })
    };


    function getById(req, res) {
        console.log('getById for user');
        var id = req.params['id'];
        userModel.selectById(id, function (e, o) {
            if (e) {
                res.status(503).send(e);
            } else if (o.rowCount > 0) {
                res.status(200).send(o.rows[0]);
            } else {
                console.log('cannot find');
                res.status(404).send({});
            }

        })
    };


    function changeById(req, res) {
        console.log('changeById for user');
        var data = req.body[user];
        userModel.updateById(function (e, o) {
            if (e) {
                console.log(e);
            } else {
                console.log(o);

            }
        })

    };

    function removeById(req, res) {
        console.log('removeById for user');

        var id = req.params['id'];
        userModel.deleteById(id, function (e, o) {
            if (e) {
                res.status(503).send(e);
            } else if (o.rowCount > 0) {
                res.status(200).send(o.rows[0]);
            } else {
                console.log('cannot find');
                res.status(404).send({});
            }

        })
    };

    function getByEId(req, res) {
        console.log('getByEId for user');

        var id = req.params['id'];
        userModel.selectByEId(id, function (e, o) {
            if (e) {
                console.log(e);
                res.status(503).send(e);
            } else {
                res.status(200).send(o.rows);
            }
        })


        return userAPI;

    }

)();

module.exports = userService;