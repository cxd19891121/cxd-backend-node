

var pool = require('./../database/eimsDatabase');

var ${table}Model = (function ${table}Model() {

    var data = {

    }

    var sample = {

    }

    var sql = {

    }


    var API = {

        //method for '/'
        selectAll: selectAll,
        insert: insert,

        //method for '/${table}Id/:id'
        selectById: selectById,
        updateById:updateById,
        deleteById:deleteById,
        undoDeleteById: undoDeleteById,
       

        //method for '/empId'
        selectByEId: selectByEId,
        updateByEId:updateByEId,
        deleteByEId: deleteByEId,
        

        //other:
        selectLast:selectLast,
    }

    //method for '/'
    //selectAll, insert
    function selectAll(callback) {
        return pool.query(sql['selectAll${TableBig}'],callback)
    }
    function insert(data, callback) {
        sql['insert${TableBig}'].values = ;
        return pool.query(sql['insert${TableBig}'], callback);
    }

    //method for '/${table}Id/:id'
    //selectById, updateById, deleteById, undoDeleteById,
    function selectById(id, callback) {
        return pool.query(sql['select${TableBig}ById'], [id], callback);
    }
    function updateById  (id, data, callback) {
        sql['update${TableBig}ById'].values = ;
        return pool.query(sql['update${TableBig}ById'], callback);
    }
    function deleteById (id,callback){
        return pool.query(sql["deleteFlag${TableBig}ById"].text,[id],callback);
    }
    function undoDeleteById (id,callback){
        return pool.query(sql["undoDelete${TableBig}ById"].text,[id],callback);
    }


    function selectByEId (id, callback){
        return pool.query(sql['select${TableBig}ByEId'],[id],callback)
    }
    function updateByEId  (id, data, callback) {
        sql['update${TableBig}ByEId'].values = ;
        return pool.query(sql['update${TableBig}ByEId'], callback);
    }
    function deleteByEId(id,callback){
        return pool.query(sql["deleteFlag${TableBig}ByEId"].text,[id],callback);
    }
    function undoDeleteByEId (id,callback){
        return pool.query(sql["undoDelete${TableBig}ByEId"].text,[id],callback);
    }

    //other method
    function selectLast(callback){
        return pool.query(sql['selectLast${TableBig}'],callback);
    }

    return API;
})();

module.exports = ${table}Model;








