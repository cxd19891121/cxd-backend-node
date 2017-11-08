/*
    File: workService
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: service for 'work' table
*/

var workModel = require('./../model/workModel');

var workService = (function workService() {

    var workAPI = {

        //API for '/'
        getAll: getAll,
        addOne: addOne,

        //API for '/workId/:id'
        getById: getById,
        changeById: changeById,
        removeById: removeById,

        //API for '/empId/:id'
        getByEId: getByEId,


    }

    function getAll(req, res) {
        console.log("getAll for work");
        workModel.selectAll(function (e, o) {
            if (e) {
                console.log(e);
                res.status(503).send(e)
            } else {
                res.status(200).send(o.rows);
            }
        })
    }

    function addOne(req, res) {
        console.log("addOne for work");
        var data = req.body[work];
        workModel.insert(data, function (e, o) {
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
        console.log('getById for work');
        var id = req.params['id'];
        workModel.selectById(id, function (e, o) {
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
        console.log('changeById for work');
        var data = req.body['work'],
            id   = req.params['id'];

        workModel.updateById(id, data,function (e, o) {
                if (e) {
                    console.log(e);
                    res.status(503).send(e)
                } else {
                    console.log(o);
                    res.status(200).send(o);
                }
        })

    };

    function removeById(req, res) {
        console.log('removeById for work');

        var id = req.params['id'];
        workModel.deleteById(id, function (e, o) {
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
        console.log('getByEId for work');

        var id = req.params['id'];
        workModel.selectByEId(id,function (e, o) {
            if (e) {
                console.log(e);
                res.status(503).send(e);
            } else {
                res.status(200).send(o.rows);
            }
        })
    }

    return workAPI;

})();

module.exports = workService;