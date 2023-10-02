const DataTypes = require('sequelize')
const connection = require('../config/database');

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
        type: DataTypes.INTEGER,
    },
    nama_program: {
        type: DataTypes.STRING,
    },
    kelas: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true, 
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt', 
});

module.exports = DaftarProgram;

(async () => {
    await connection.sync();
})();
