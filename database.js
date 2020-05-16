const mysql = require('mysql');

// coneccion a la BD
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'app_inci',
    multipleStatements: true
});


mysqlConnection.connect(function(err) {
    if (err) throw err;

    console.log('Estado de BD : \x1b[32m%s\x1b[0m', 'online');

});

module.exports = mysqlConnection;