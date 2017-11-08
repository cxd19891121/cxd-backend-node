/*
    File: loginService
    project: xiaodongchen-backend-node
    Author: xiaodong chen
    Description: Service file for login
*/

var userModel = require('./../model/userModel');

var loginService = (function loginService() {

    var loginAPI = {
        login: login,
        logout: logout,

    }

    function login(req, res) {
        var username = req.body['username'];
        var password = req.body['password'];

        userModel.selectByName(username, function (e, o) {

            if (e) {
                // case 1: fail to connect to database: callback a error msg with the 'err' object.
                console.log(e);
                res.status(503).send(e)
            }
            // case 2: connect database but there is no such a username: callback a error msg without any data.
            else if (o.rowCount <= 0) {
                console.log('invalid username or password');
                res.status(404).send('invalid username or password');
            }

            //case 4: correct username and password:
            // 1> put the user into the new session.

            else if (o.rows[0].password === password) {
                req.session.user = o.rows[0];
                console.log('success login');
                res.status(200).send(o);
            }
            else if (o.rows[0].password === md5(password)) {
                req.session.user = o.rows[0];
                console.log('success login');
                res.status(200).send(o);

            }
            //case 3: find user but password do not match: callback a error msg without any data.
            else if (o.rows[0].password !== password) {
                console.log('invalid username or password');
                res.status(404).send('invalid username or password');
            }

        })


    }

    function logout(req, res) {
        req.session = null;
        res.send('has been logout');
    }

    return loginAPI;

})();

module.exports = loginService;