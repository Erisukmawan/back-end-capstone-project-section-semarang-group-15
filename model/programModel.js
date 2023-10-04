const DataTypes = require('sequelize')
const connection = require('../config/database');

// Defines the program table
const Program = connection.define("program", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_program: {
        type: DataTypes.STRING,
    },
    harga_program: {
        type: DataTypes.INTEGER,
    },
});

module.exports = Program;

// Synchronize databases
(async () => {
    await connection.sync();
})();