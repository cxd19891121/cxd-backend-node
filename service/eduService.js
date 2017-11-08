/*
    File: eduService
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: service for 'edu' table
*/

var eduModel = require('./../model/eduModel');

var eduService = (function eduService() {

    var eduAPI = {

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
        console.log("getAll for edu");
        eduModel.selectAll(function (e, o) {
            if (e) {
                console.log(e);
                res.status(503).send(e)
            } else {
                res.status(200).send(o.rows);
            }
        })
    }

    function addOne(req, res) {
        console.log("addOne for edu");
        var data = req.body[edu];
        eduModel.insert(data, function (e, o) {
            if (e) {
                console.log(e);
                res.status(503).send(e)
            } else {
                console.log(o);
                res.status(200).send(o);
            }
        })
    };


    function getById(req, res) {
        console.log('getById for edu');
        var id = req.params['id'];
        eduModel.selectById(id, function (e, o) {
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
        console.log('changeById for edu');
        var data = req.body['edu'],
            id = req.params['id'];
        eduModel.updateById(data, id,function (e, o) {
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
        console.log('removeById for edu');

        var id = req.params['id'];
        eduModel.deleteById(id, function (e, o) {
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
        console.log('getByEId for edu');

        var id = req.params['id'];
        eduModel.selectByEId(id,function (e, o) {
            if (e) {
                console.log(e);
                res.status(503).send(e);
            } else {
                res.status(200).send(o.rows);
            }
        })
    }

    return eduAPI;

})();

module.exports = eduService;