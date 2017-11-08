var pg = require('pg');
var dbConfig = require('./../config/config').POSTGRE_DB;

pg.defaults.ssl = true;

var pool = new pg.Pool(dbConfig);


module.exports = pool;







