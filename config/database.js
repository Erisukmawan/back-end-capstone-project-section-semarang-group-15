require("dotenv").config();
const Sequelize = require('sequelize');

// Connection to the database
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

// Testing the connection
connection.authenticate()
    .then(() => console.log("Database connected"))
    .catch((error) => {
        console.log(`Unable to connect to database: ${error}`);
    });

module.exports = connection;