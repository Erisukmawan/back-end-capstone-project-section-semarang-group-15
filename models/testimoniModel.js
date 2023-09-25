const connection = require('../config/database');

const getAllTestimoni = () => {
    const SQLQuery = 'SELECT * FROM testimoni';
    return connection.execute(SQLQuery);
}
const createTestimoni = (body) => {
    const SQLQuery = `INSERT INTO testimoni (id,nama, nama_program, pesan_testimoni, foto) VALUES(${body.id}, '${body.nama}', '${body.nama_program}', '${body.pesan_testimoni}', '${body.foto}')`;

    return connection.execute(SQLQuery);
}

module.exports = { getAllTestimoni, createTestimoni };