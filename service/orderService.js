/*
    File: orderService
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Service file for 'order' table
*/

var orderModel = require('./../model/orderId');

var orderService = (function orderService() {

    var orderAPI = {

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
        console.log("getAll for order");
        orderModel.selectAll(function (e, o) {
            if (e) {
                console.log(e);
                res.status(503).send(e)
            } else {
                res.status(200).send(o.rows);
            }
        })
    }

    function addOne(req, res) {
        console.log("addOne for order");
        var data = req.body[order];
        orderModel.insert(data, function (e, o) {
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
        console.log('getById for order');
        var id = req.params['id'];
        orderModel.selectById(id, function (e, o) {
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
        console.log('changeById for order');

        var id = req.params['id'];
        var data = req.body['order'];
        orderModel.updateById(id, data, function (e, o) {
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
        console.log('removeById for order');

        var id = req.params['id'];
        orderModel.deleteById(id, function (e, o) {
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
        console.log('getByEId for order');

        var id = req.params['id'];
        orderModel.selectByEId(id,function (e, o) {
            if (e) {
                console.log(e);
                res.status(503).send(e);
            } else {
                res.status(200).send(o.rows);
            }
        })
    }

    return orderAPI;

})();

module.exports = orderService;