// const mysql = require('mysql2');
// require("dotenv").config();

// const connection = mysql.createPool({
//     host: process.env.MYSQLHOST,
//     user: process.env.MYSQLUSER,
//     password: process.env.MYSQLPASSWORD,
//     database: process.env.MYSQLDATABASE,
//     port: process.env.MYSQLPORT
// });

// module.exports = connection.promise();


require("dotenv").config();
const Sequelize = require('sequelize');

const connection = new Sequelize(
    {
        username : process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        database: process.env.MYSQLDATABASE,
        host: process.env.MYSQLHOST,
        port: process.env.MYSQLPORT,
        dialect: "mysql",
    }
);

connection.authenticate()
    .then(() => console.log("Database connected"))
    .catch((error) => {
        console.log(`Unable to connect to database: ${error}`);
    });

module.exports = connection;