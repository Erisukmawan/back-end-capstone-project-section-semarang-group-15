const connection = require('../config/database');

const getAlldaftarProgram = () => {
    const SQLQuery = 'SELECT * FROM daftar_program';
    return connection.execute(SQLQuery);
}
const createdaftarProgram = (body) => {
    const timestamp = new Date().toISOString().slice(0, 10);
    const SQLQuery = `INSERT INTO daftar_program (id, nama, email, no_tel, nama_program, kelas, date) VALUES(${body.id}, '${body.nama}', '${body.email}',  ${body.no_tel},  '${body.nama_program}', '${body.kelas}' ,'${timestamp}')`;

    return connection.execute(SQLQuery);
}

module.exports = { getAlldaftarProgram, createdaftarProgram };