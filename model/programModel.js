const DataTypes = require('sequelize')
const connection = require('../config/database');

const Testimoni = connection.define("program", {
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

module.exports = Testimoni;

(async () => {
    await connection.sync();
})();