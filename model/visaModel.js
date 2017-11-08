var pool = require('./../database/eimsDatabase');

var visaModel = (function visaModel() {

    var API = {

        //method for '/'
        selectAll: selectAll,
        insert: insert,

        //method for '/visaId/:id'
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
        selectAllVisa: { name: "selectAllVisa", text: "SELECT * FROM visa_info WHERE delete_flag = false" }, //test only
        selectVisaById:{ name: "selectVisaById", text: "SELECT * FROM visa_info where v_id = $1 AND delete_flag = false", values: [1] },
        selectVisaByEId: {name: "selectVisaByEId", text: "SELECT * FROM visa_info where e_id = $1 AND delete_flag = false", values: [1]},
        deleteTable:{ name:"deleteTable", text:"delete from visa_info" },
        deleteVisaById: {name:"deleteVisaById",text:"DELETE FROM visa_info WHERE v_id = $1",value:[1]},
        deleteVisaByEId: {name:"deleteVisaByEId",text:"DELETE FROM visa_info WHERE e_id = $1",value:[1]},

        insertVisa: {
            name: "insertVisa",
            text: "INSERT INTO visa_info (e_id,type,start_time,end_time,status) VALUES ($1, $2, $3, $4, $5)",
            values: [1,"HIB", '2000-01-01','2000-01-01',null]
        },

        updateVisaById: {
            name: "updateVisaById",
            text: "UPDATE visa_info SET (e_id,type,start_time,end_time,status) = ($1, $2, $3, $4, $5) WHERE v_id = $6",
            values: [1,"HIB", '2000-01-01','2000-01-01',null,0]
        },

        updateVisaByEId: {
            name: "updateVisaByEId",
            text: "UPDATE visa_info SET (type,start_time,end_time,status) = ($1, $2, $3, $4) WHERE e_id = $5",
            values: [ "HIB", '2000-01-01','2000-01-01',null,0]
        },

        dropTable: {name:"dropTable", text:"drop table visa_info"},

        createTable :{
            name:"createVisaTable",
            text: "create table visa_info ("+
            "v_id SERIAL primary key not null ,"+
            "e_id int,"+
            "type text,"+
            "start_time DATE,"+
            "end_time DATE,"+
            "status text" +
            ")",
        },

        deleteFlagVisaById :{name:"deleteFlagVisaById", text :"UPDATE visa_info SET delete_flag = true where v_id = $1", values :[0]},
        undoDeleteVisaById :{name:"undoDeleteVisaById",text:"UPDATE visa_info SET delete_flag = false where v_id = $1",values:[0]},
        deleteFlagVisaByEId: {name:"deleteFlagVisaByEId",text:"UPDATE visa_info SET delete_flag = true WHERE e_id = $1",value:[1]},
        undoDeleteVisaByEId :{name:"undoDeleteVisaByEId",text:"UPDATE visa_info SET delete_flag = false where e_id = $1",values:[0]},

    }

    //method for '/'
    //selectAll, insert
    function selectAll(callback) {
        return pool.query(sql['selectAllVisa'], callback)
    }

    function insert(data, callback) {
        sql['insertVisa'].values =  [data.eid, data.type, data.sTime, data.eTime,data.status];
        return pool.query(sql['insertVisa'], callback);
    }

    //method for '/visaId/:id'
    //selectById, updateById, deleteById, undoDeleteById,
    function selectById(id, callback) {
        return pool.query(sql['selectVisaById'], [id], callback);
    }

    function updateById(id, data, callback) {
        sql['updateVisaById'].values = [data.eid, data.type, data.sTime, data.eTime,data.status,id]
        return pool.query(sql['updateVisaById'], callback);
    }

    function deleteById(id, callback) {
        return pool.query(sql["deleteFlagVisaById"].text, [id], callback);
    }

    function undoDeleteById(id, callback) {
        return pool.query(sql["undoDeleteVisaById"].text, [id], callback);
    }


    function selectByEId(id, callback) {
        return pool.query(sql['selectVisaByEId'], [id], callback)
    }

    function updateByEId(id, data, callback) {
        sql['updateVisaByEId'].values = [data.type, data.sTime, data.eTime,data.status,id]
        return pool.query(sql['updateVisaByEId'], callback);
    }

    function deleteByEId(id, callback) {
        return pool.query(sql["deleteFlagVisaByEId"].text, [id], callback);
    }

    function undoDeleteByEId(id, callback) {
        return pool.query(sql["undoDeleteVisaByEId"].text, [id], callback);
    }


    return API;
})();

module.exports = visaModel;








