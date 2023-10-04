const DataTypes = require('sequelize')
const connection = require('../config/database');

// Defines the testimoni table
const Testimoni = connection.define("testimoni", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: {
        type: DataTypes.STRING,
    },
    nama_program: {
        type: DataTypes.STRING,
    },
    pesan_testimoni: {
        type: DataTypes.STRING,
    },
    foto: {
        type: DataTypes.STRING,
    },
});

module.exports = Testimoni;

// Synchronize databases
(async () => {
    await connection.sync();
})();