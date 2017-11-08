var pool = require('./../database/eimsDatabase');

var empModel = (function empModel() {

    var API = {

        //method for '/'
        selectAll: selectAll,
        insert: insert,

        //method for '/empId/:id'
        selectById: selectById,
        updateById: updateById,
        deleteById: deleteById,
        undoDeleteById: undoDeleteById,


        //method for '/empId'
        selectByEId: selectByEId,

        //other:
        selectLast: selectLast,
        selectByTitle: selectByTitle,
    }

    var sql = {
        selectAllEmp : {name: "selectAllEmp", text: "SELECT * FROM employee_info where delete_flag = false"}, //test only
        selectEmpById:{ name:"selectEmpById",text:"SELECT * FROM employee_info where emp_id = $1 AND delete_flag = false"},
        selectEmpByEId:{ name:"selectEmpByEId",text:"SELECT * FROM employee_info where emp_id = $1 AND delete_flag = false"},
        selectLastEmp :{name: "selectLastEmp", text: "SELECT * FROM employee_info where delete_flag = false ORDER BY emp_id DESC LIMIT 1 "},
        insertEmp: {
            name: "insertEmp",
            text: "INSERT INTO employee_info (first_name,last_name,middle_name,DOB,SSN,marital_status, job_title," +
            "job_level," +
            "salary, " +
            "home_phone," +
            "cellphone," +
            "email," +
            "termn_date," +
            "termn_reason," +
            "p_add," +
            "p_city," +
            "p_state," +
            "p_zip," +
            "p_country," +
            "b_add," +
            "b_city," +
            "b_state," +
            "b_zip," +
            "b_country," +
            "health_ins," +
            "regional_subsides," +
            "reimbursement," +
            "payrise_percentage," +
            "progress)"+
            "VALUES ($1, $2, $3, $4, $5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29)",
            values: ["testname","testF",null,'1999-9-9', 0,false, "test_title","test_level",8,1111,2222,"test@gmail.com",'2001-01-01',"test" +
            " reason","666 p street","ames","IA",50010,"USA","233 B road", "beijing","beijing",100000,"China","test healthIns","test rs","test rs",10,0]
        },

        deleteEmpById: {name:"deleteEmpById",text:"DELETE FROM employee_info WHERE emp_id = $1",value:[1]},
        updateEmpById: {name:"updateEmpById",text:"UPDATE employee_info SET first_name = $1, last_name = $2, middle_name = $3, DOB = $4," +
        "SSN = $5, marital_status = $6," +
        "job_title = $7," +
        "job_level = $8," +
        "salary = $9," +
        "home_phone = $10," +
        "cellphone = $11," +
        "email = $12," +
        "termn_date = $13," +
        "termn_reason = $14," +
        "p_add = $15," +
        "p_city = $16," +
        "p_state = $17," +
        "p_zip = $18," +
        "p_country = $19," +
        "b_add = $20," +
        "b_city = $21," +
        "b_state = $22," +
        "b_zip = $23," +
        "b_country = $24," +
        "health_ins = $25," +
        "regional_subsides = $26," +
        "reimbursement = $27," +
        "payrise_percentage = $28, "+
        "progress = $29"+
        "where emp_id = $30",},

        deleteFlagEmpById :{name:"deleteFlagUserById", text :"UPDATE employee_info SET delete_flag = true where emp_id = $1", values :[0]},
        undoDeleteEmpById :{name:"undoDeleteUserById",text:"UPDATE employee_info SET delete_flag = false where emp_id = $1",values:[0]},
        selectEmpByTitle:{ name:"selectEmpByTitle",text:"SELECT * FROM employee_info where job_title = $1 AND delete_flag = false"},


    }

    //method for '/'
    //selectAll, insert
    function selectAll(callback) {
        return pool.query(sql['selectAllEmp'], callback)
    }

    function insert(data, callback) {
        sql['insertEmp'].values = [ data.fName, data.lName,data.mName,data.DOB,data.SSN,data.mStatus,data.jTitle,data.jLevel,data.salary,data.hPhone,data.cPhone,data.email,data.tDate,data.tReason,
            data.pAdd,data.pCity,data.pState,data.pZip,data.pCountry,data.bAdd,data.bCity,data.bState,data.bZip,data.bCountry,data.hInsurance,data.rSubside,data.reimbursement,data.rPercent,data.progress];;
        return pool.query(sql['insertEmp'], callback);
    }

    //method for '/empId/:id'
    //selectById, updateById, deleteById, undoDeleteById,
    function selectById(id, callback) {
        return pool.query(sql['selectEmpById'], [id], callback);
    }

    function updateById(id, data, callback) {
        sql['updateEmpById'].values =  [ data.fName, data.lName,data.mName,data.DOB,data.SSN,data.mStatus,data.jTitle,data.jLevel,data.salary,data.hPhone,data.cPhone,data.email,data.tDate,data.tReason,
            data.pAdd,data.pCity,data.pState,data.pZip,data.pCountry,data.bAdd,data.bCity,data.bState,data.bZip,data.bCountry,data.hInsurance,data.rSubside,
            data.reimbursement,data.rPercent,data.progress,id];
        return pool.query(sql['updateEmpById'], callback);
    }

    function deleteById(id, callback) {
        return pool.query(sql["deleteFlagEmpById"].text, [id], callback);
    }

    function undoDeleteById(id, callback) {
        return pool.query(sql["undoDeleteEmpById"].text, [id], callback);
    }

    //method for '/empId/:id'
    //selectByEId
    function selectByEId(id, callback) {
        return pool.query(sql['selectEmpByEId'], [id], callback)
    }



    //other method
    function selectLast(callback) {
        return pool.query(sql['selectLastEmp'], callback);
    }

    function selectByTitle(title, callback){
        return pool.query(sql['selectEmpByTitle'],[title],callback)
    }

    return API;
})();

module.exports = empModel;








