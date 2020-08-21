const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'pqxodc',
    database: 'api_elfos'

})

module.exports = conection;
