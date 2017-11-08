var pool = require('./../database/eimsDatabase'),
    md5 = require('md5');

var userModel = (function userModel() {

    var API = {

        //method for '/'
        selectAll: selectAll,
        insert: insert,

        //method for '/userId/:id'
        selectById: selectById,
        updateById: updateById,
        deleteById: deleteById,
        undoDeleteById: undoDeleteById,


        //other:
        selectLast: selectLast,
        selectFirst: selectFirst,
        selectAllUsername : selectAllUsername,
        selectByName: selectByName,
        selectEmailByUsername: selectEmailByUsername,
    }

    var sql = {
        selectAllUsername:{name:'selectAllUsername',text:"select username from user_info where delete_flag = false"},
        selectAllUser : { name:'selectAllFromUser', text: "select * from user_info where delete_flag = false"},
        selectUserByName  :{name: "selectUserByName", text: "SELECT * FROM user_info where username = $1 AND delete_flag = false" , values: ["default"] },
        selectUserById: {name:'selectUserById',text:"select * from user_info where id = $1 AND delete_flag = false"},
        selectFirstUser : { name: 'selectFirstUser', text: "SELECT * FROM user_info where delete_flag = false ORDER BY id LIMIT 1"},
        deleteUserById: {name:"deleteUserById",text:"DELETE FROM user_info WHERE id = $1",values:[1]},
        insertUser:{name:'insertUser',text:'insert into user_info (username,password,e_id,level,email) VALUES ($1, $2, $3, $4, $5)',
            values:['username','password',2333,2333]},
        updateUserById: {name:"updateUserById",text:"UPDATE user_info SET username = $1, password = $2, e_id = $3, level = $4, email = $5 where id=$6"
            ,values: ["username", "password", 1, 0,"amesIT@example.com",1] },
        selectLastUser: {name: "selectLastUser", text: "SELECT * FROM user_info where delete_flag = false ORDER BY id DESC LIMIT 1"},
        selectEmailByUsername:{name:"selectEmailByUsername", text: "SELECT email,password FROM user_info WHERE username = $1 AND delete_flag = false", values: ["default"]},

        deleteFlagUserById :{name:"deleteFlagUserById", text :"UPDATE user_info SET delete_flag = true where id = $1", values :[0]},
        undoDeleteUserById :{name:"undoDeleteUserById",text:"UPDATE user_info SET delete_flag = false where id = $1",values:[0]}
    }

    //method for '/'
    //selectAll, insert
    function selectAll(callback) {
        return pool.query(sql['selectAllUser'], callback)
    }

    function insert(dt, callback) {
        sql['insertUser'].values = [dt.username,md5(dt.password),dt.eid,dt.level,dt.email];
        return pool.query(sql['insertUser'], callback);
    }

    //method for '/userId/:id'
    //selectById, updateById, deleteById, undoDeleteById,
    function selectById(id, callback) {
        return pool.query(sql['selectUserById'], [id], callback);
    }

    function updateById(id, dt, callback) {
        if (dt.password != dt.oldpassword) {
            dt.password = md5(dt.password);
        }
        sql['updateUserById'].values = [dt.username,dt.password,dt.eid,dt.level,dt.email,id];
        return pool.query(sql['updateUserById'], callback);
    }

    function deleteById(id, callback) {
        return pool.query(sql["deleteFlagUserById"].text, [id], callback);
    }

    function undoDeleteById(id, callback) {
        return pool.query(sql["undoDeleteUserById"].text, [id], callback);
    }



    function undoDeleteByEId(id, callback) {
        return pool.query(sql["undoDeleteUserByEId"].text, [id], callback);
    }

    //other method
    function selectFirst(callback){
        return pool.query(sql['selectFirstUser'],callback);
    }

    function selectLast(callback) {
        return pool.query(sql['selectLastUser'], callback);
    }

    function selectAllUsername(callback){
        return pool.query(sql["selectAllUsername"], callback);
    }

    function selectByName(username,callback){
        sql['selectUserByName'].values = [username];
        console.log(username);
        return pool.query(sql["selectUserByName"], callback)
    }

    function selectEmailByUsername(username,callback){
        return pool.query(sql["selectEmailByUsername"].text,[username],callback)
    }


    return API;
})();

module.exports = userModel;








