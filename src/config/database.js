const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'containers-us-west-71.railway.app',
    user: 'root',
    password: '6wL1pmeIRHNmPpGXeJoE',
    database: 'railway',
    port: 7050
});

module.exports = connection.promise()
module.exports = connection