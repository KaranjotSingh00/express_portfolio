'use strict';
let mysql = require('mysql');
let options = {
    connectionLimit: 10, //important
    host: 'us-cdbr-east-04.cleardb.com',
    database: 'heroku_4e8e057a18c7f3e',
    user: 'ba5fd6d2385787',
    password: '33155130',
    debug: false,
    multipleStatements: true
};
let pool = mysql.createPool(options);

module.exports = pool;