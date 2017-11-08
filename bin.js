
var http = require('http'),
    app = require("./app"),
    server = http.createServer(app),
    port = normalizePort( process.env.PORT||3000);

app
    .set('port',port);


server
    .listen(app.get('port'))
    .on('listening',serverOnlistener)
    .on('error',errorHandle);


//function details:
function serverOnlistener(){
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    console.log("listening event: ( " + bind + " )");
}

function errorHandle(error){

    // noinspection Annotator
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            // noinspection Annotator
            // noinspection Annotator
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            // noinspection Annotator
            // noinspection Annotator
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
