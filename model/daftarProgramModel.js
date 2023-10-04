const DataTypes = require('sequelize')
const connection = require('../config/database');

// Defines the daftar program table
const DaftarProgram = connection.define("daftar_program", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    no_tel: {
        type: DataTypes.STRING,
    },
    nama_program: {
        type: DataTypes.STRING,
    },
    kelas: {
        type: DataTypes.STRING,
    },
});

module.exports = DaftarProgram;

// Synchronize databases
(async () => {
    await connection.sync();
})();
