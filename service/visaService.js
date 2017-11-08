/*
    File: visaService
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Service for 'visa' table
*/

var visaModel = require('./../model/visaModel');

var visaService = (function visaService() {

    var visaAPI = {

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
        console.log("getAll for visa");
        visaModel.selectAll(function (e, o) {
            if (e) {
                console.log(e);
                res.status(503).send(e)
            } else {
                res.status(200).send(o.rows);
            }
        })
    }

    function addOne(req, res) {
        console.log("addOne for visa");
        var data = req.body[visa];
        visaModel.insert(data, function (e, o) {
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
        console.log('getById for visa');
        var id = req.params['id'];
        visaModel.selectById(id, function (e, o) {
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
        console.log('changeById for visa');
        var data = req.body['visa'];
        var id = req.params['id'];
        visaModel.updateById(id, data, function (e, o) {
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
        console.log('removeById for visa');

        var id = req.params['id'];
        visaModel.deleteById(id, function (e, o) {
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
        console.log('getByEId for visa');

        var id = req.params['id'];
        visaModel.selectByEId(id,function (e, o) {
            if (e) {
                console.log(e);
                res.status(503).send(e);
            } else {
                res.status(200).send(o.rows);
            }
        })
    }

    return visaAPI;

})();

module.exports = visaService;