var pool = require('./../database/eimsDatabase');

var eduModel = (function eduModel() {


    var API = {

        //method for '/'
        selectAll: selectAll,
        insert: insert,

        //method for '/eduId/:id'
        selectById: selectById,
        updateById: updateById,
        deleteById: deleteById,
        undoDeleteById: undoDeleteById,


        //method for '/empId'
        selectByEId: selectByEId,
        updateByEId: updateByEId,
        deleteByEId: deleteByEId,


        //other:
        selectLast: selectLast,
    }

    var sql = {
        selectAllEdu: {name: "selectAllEdu", text: "SELECT * FROM education_info where delete_flag = false"}, //test only
        selectEduById: {name: "selectEduById", text: "SELECT * FROM education_info where ed_id = $1 AND delete_flag = false", values: [1]},
        selectEduByEId: {name: "selectEduByEId", text: "SELECT * FROM education_info where e_id = $1 AND delete_flag = false", values: [1]},
        deleteEduById: {name:"deleteEduById",text:"DELETE FROM education_info WHERE ed_id = $1",value:[1]},
        deleteEduByEId: {name:"deleteEduByEId",text:"DELETE FROM education_info WHERE e_id = $1",value:[1]},

        insertEdu: {
            name: "insertEdu",
            text: "INSERT INTO education_info (e_id,degree,major,university) VALUES ($1, $2, $3, $4)",
            values: [ 1, "bachelor", "cs", "ISU"]
        },

        updateEduById: {
            name: "updateEduById",
            text: "UPDATE education_info SET (e_id,degree,major,university) = ($1, $2, $3, $4) WHERE ed_id = $5",
            values: [ 1, "bachelor", "cs", "ISU",1]
        },

        updateEduByEId: {
            name: "updateEduByEId",
            text: "UPDATE education_info SET (degree,major,university) = ($1, $2, $3) WHERE e_id = $4",
            values: [ "bachelor", "cs", "ISU",1]
        },

        selectLastEdu: {name: "selectLastEdu", text: "SELECT * FROM education_info WHERE delete_flag = false ORDER BY ed_id DESC LIMIT 1"},

        deleteFlagEduById :{name:"deleteFlagEduById", text :"UPDATE education_info SET delete_flag = true where ed_id = $1", values :[0]},
        undoDeleteEduById :{name:"undoDeleteEduById",text:"UPDATE education_info SET delete_flag = false where ed_id = $1",values:[0]},
        deleteFlagEduByEId: {name:"deleteFlagEduByEId",text:"UPDATE education_info SET delete_flag = true WHERE e_id = $1",value:[1]},
        undoDeleteEduByEId :{name:"undoDeleteEduByEId",text:"UPDATE education_info SET delete_flag = false where e_id = $1",values:[0]},

    }

    //method for '/'
    //selectAll, insert
    function selectAll(callback) {
        return pool.query(sql['selectAllEdu'], callback)
    }

    function insert(data, callback) {
        sql['insertEdu'].values =  [data.eid, data.degree, data.major, data.uni];
        return pool.query(sql['insertEdu'], callback);
    }

    //method for '/eduId/:id'
    //selectById, updateById, deleteById, undoDeleteById,
    function selectById(id, callback) {
        return pool.query(sql['selectEduById'], [id], callback);
    }

    function updateById(id, data, callback) {
        sql['updateEduById'].values =  [data.eid, data.degree, data.major, data.uni, id];
        return pool.query(sql['updateEduById'], callback);
    }

    function deleteById(id, callback) {
        return pool.query(sql["deleteFlagEduById"].text, [id], callback);
    }

    function undoDeleteById(id, callback) {
        return pool.query(sql["undoDeleteEduById"].text, [id], callback);
    }


    function selectByEId(id, callback) {
        return pool.query(sql['selectEduByEId'], [id], callback)
    }

    function updateByEId(id, data, callback) {
        sql['updateEduByEId'].values =  [data.degree, data.major, data.uni,id];
        return pool.query(sql['updateEduByEId'], callback);
    }

    function deleteByEId(id, callback) {
        return pool.query(sql["deleteFlagEduByEId"].text, [id], callback);
    }

    function undoDeleteByEId(id, callback) {
        return pool.query(sql["undoDeleteEduByEId"].text, [id], callback);
    }

    //other method
    function selectLast(callback) {
        return pool.query(sql['selectLastEdu'], callback);
    }

    return API;
})();

module.exports = eduModel;








