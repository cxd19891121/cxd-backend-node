
//express module
var express = require('express'),
    app = express();

//route module
var appRouter = require('./router/router');
    route = express.Router();

route
    .use('/', appRouter)
    .use(catch404)
    .use(errorHandler);


app.use('/',route);


function catch404(req, res, next) {
    console.log('404')
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}

function errorHandler(err, req, res) {
    console.log(err);
    res.status(err.status || 500);
    res.send(err.message);
}

module.exports = app;
