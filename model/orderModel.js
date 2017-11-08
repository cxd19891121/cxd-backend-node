var pool = require('./../database/eimsDatabase');

var orderModel = (function orderModel() {


    var API = {

        //method for '/'
        selectAll: selectAll,
        insert: insert,

        //method for '/orderId/:id'
        selectById: selectById,
        updateById: updateById,
        deleteById: deleteById,
        undoDeleteById: undoDeleteById,


        //method for '/empId'
        selectByEId: selectByEId,
        updateByEId: updateByEId,
        deleteByEId: deleteByEId,


    }

    var sql = {
        selectAllOrder: { name: "selectAllOrder", text: "SELECT * FROM order_info WHERE delete_flag = false"  }, //test only
        selectOrderById:{ name: "selectOrderById", text: "SELECT * FROM order_info WHERE o_id = $1 AND delete_flag = false", values: [1] },
        selectOrderByEId: {name: "selectAllByEId", text: "SELECT * FROM order_info WHERE e_id = $1 AND delete_flag = false", values: [1]},


        //need code
        insertOrder: {
            name: "insertOrder",
            text: "INSERT INTO order_info (" +
            "e_id," +
            "location," +
            "company_name," +
            "order_description," +
            "type," +
            "title," +
            "o_start_time," +
            "o_end_time," +
            "owner," +
            "extension_time" +
            ") VALUES ($1, $2, $3, $4, $5,$6,$7,$8,$9,$10)",
            values: [1, "SAN JOSE","linked-in","some description","java","java programmer",'2000-01-01','2001-01-01',"logan", null]
        },

        updateOrderById: {
            name: "updateOrderById",
            text: "UPDATE order_info SET(" +
            "e_id," +
            "location," +
            "company_name," +
            "order_description," +
            "type," +
            "title," +
            "o_start_time," +
            "o_end_time," +
            "owner," +
            "extension_time" +
            ") = ($1, $2, $3, $4, $5,$6,$7,$8,$9,$10) WHERE o_id = $11",
            values: [1, "SAN JOSE","linked-in","some description","java","java programmer",'2000-01-01','2001-01-01',"logan", null,1]
        },

        updateOrderByEId: {
            name: "updateOrderByEId",
            text: "UPDATE order_info SET(" +
            "location," +
            "company_name," +
            "order_description," +
            "type," +
            "title," +
            "o_start_time," +
            "o_end_time," +
            "owner," +
            "extension_time" +
            ") = ($1, $2, $3, $4, $5,$6,$7,$8,$9) WHERE e_id = $10",
            values: [1, "SAN JOSE","linked-in","some description","java","java programmer",'2000-01-01','2001-01-01',"logan", null,1]
        },
        deleteOrderById: {name:"deleteOrderById",text:"DELETE FROM order_info WHERE o_id = $1",value:[1]},
        deleteOrderByEId: {name:"deleteOrderByEId",text:"DELETE FROM order_info WHERE e_id = $1",value:[1]},

        dropTable: {name:"dropOrderTable", text:"drop table order_info"},
        // * 11 cols: o_id, e_id, location,company_name, description, type, title, start_time, end_time, owner, extension_time
        createTable: {name:"createOrderTable",text:"create table order_info (" +
        "o_id SERIAL primary key not null," +
        "e_id int not null," +
        "location text," +
        "company_name text," +
        "order_description text," +
        "type text," +
        "title text," +
        "o_start_time date," +
        "o_end_time date," +
        "owner text," +
        "extension_time text" +
        ")"},


        deleteFlagOrderById :{name:"deleteFlagOrderById", text :"UPDATE order_info SET delete_flag = true where o_id = $1", values :[0]},
        undoDeleteOrderById :{name:"undoDeleteOrderById",text:"UPDATE order_info SET delete_flag = false where o_id = $1",values:[0]},
        deleteFlagOrderByEId: {name:"deleteFlagOrderByEId",text:"UPDATE order_info SET delete_flag = true WHERE e_id = $1",value:[1]},
        undoDeleteOrderByEId :{name:"undoDeleteOrderByEId",text:"UPDATE order_info SET delete_flag = false where e_id = $1",values:[0]},


    }

    //method for '/'
    //selectAll, insert
    function selectAll(callback) {
        return pool.query(sql['selectAllOrder'], callback)
    }

    function insert(data, callback) {
        sql['insertOrder'].values =  [ data.eid, data.jLocation, data.company, data.des,data.type, data.title,data.sTime,data.eTime,data.owner,data.ext];
        return pool.query(sql['insertOrder'], callback);
    }

    //method for '/orderId/:id'
    //selectById, updateById, deleteById, undoDeleteById,
    function selectById(id, callback) {
        return pool.query(sql['selectOrderById'], [id], callback);
    }

    function updateById(id, data, callback) {
        sql['updateOrderById'].values = [ data.eid, data.jLocation, data.company, data.des,data.type,data.title,data.sTime,data.eTime,data.owner,data.ext,id];
        return pool.query(sql['updateOrderById'], callback);
    }

    function deleteById(id, callback) {
        return pool.query(sql["deleteFlagOrderById"].text, [id], callback);
    }

    function undoDeleteById(id, callback) {
        return pool.query(sql["undoDeleteOrderById"].text, [id], callback);
    }


    function selectByEId(id, callback) {
        return pool.query(sql['selectOrderByEId'], [id], callback)
    }

    function updateByEId(id, data, callback) {
        sql['updateOrderByEId'].values = [ data.jLocation, data.company, data.des,data.type,data.title,data.sTime,data.eTime,data.owner,data.ext,id];
        return pool.query(sql['updateOrderByEId'], callback);
    }

    function deleteByEId(id, callback) {
        return pool.query(sql["deleteFlagOrderByEId"].text, [id], callback);
    }

    function undoDeleteByEId(id, callback) {
        return pool.query(sql["undoDeleteOrderByEId"].text, [id], callback);
    }

    return API;
})();

module.exports = orderModel;








