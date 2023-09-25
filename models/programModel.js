const connection = require('../config/database');

const getAllProgram = () => {
    const SQLQuery = 'SELECT * FROM program';
    return connection.execute(SQLQuery);
}
const createProgram = (body) => {
    const SQLQuery = `INSERT INTO program (id, nama_program, harga_program) VALUES(${body.id}, '${body.nama_program}', ${body.harga_program})`;

    return connection.execute(SQLQuery);
}

module.exports =  {getAllProgram, createProgram};