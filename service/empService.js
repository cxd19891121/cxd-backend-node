/*
    File: empService
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Service file for 'emp' table
*/

var empModel = require('./../model/empModel');

var empService = (function empService() {

        var empAPI = {

            //API for '/'
            getAll: getAll,
            addOne: addOne,

            //API for '/empId/:id'
            getById: getById,
            changeById: changeById,
            removeById: removeById,

            //API for '/empId/:id'
            getByEId: getByEId,


        }

        function getAll(req, res) {
            console.log("getAll for emp");
            empModel.selectAll(function (e, o) {
                if (e) {
                    console.log(e);
                    res.status(503).send(e)
                } else {
                    res.status(200).send(o.rows);
                }
            })
        }

        function addOne(req, res) {
            console.log("addOne for emp");
            var data = req.body[emp];
            empModel.insert(data, function (e, o) {
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
            console.log('getById for emp');
            var id = req.params['id'];
            empModel.selectById(id, function (e, o) {
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
            console.log('changeById for emp');
            var data = req.body['emp'],
                id = req.params['id'];

            empModel.updateById(id,data,function (e, o) {
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
            console.log('removeById for emp');

            var id = req.params['id'];
            empModel.deleteById(id, function (e, o) {
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

})();

module.exports = empService;