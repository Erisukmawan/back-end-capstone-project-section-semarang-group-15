const DataTypes = require('sequelize')
const connection = require('../config/database');

const KontakKami = connection.define("kontak_kami", {
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
    isi_pesan: {
        type: DataTypes.STRING,
    },
},
{
    timestamps: true, 
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt', 
});

module.exports = KontakKami;

(async () => {
    await connection.sync();
})();