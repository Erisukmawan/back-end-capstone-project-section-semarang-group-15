const mysql = require('mysql2');
const connection = require('../config/database.js');

const getAllDaftarProgram = (request, response) => {
    connection.execute('SELECT * FROM daftar_program', (err, rows) => {
        if (err) {
            response.send({
                message: 'Gagal Tersambung',
                data: err
            })
        } else {
            response.send(rows)
        }
    })
};

const createDaftarProgram = (request, response) => {
    const { id, nama, email, no_tel, nama_program, kelas, date } = request.body;
    const query = 'INSERT INTO daftar_program (id, nama, email, no_tel, nama_program, kelas, date) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [id, nama, email, no_tel, nama_program, kelas, date];

    connection.execute(query, values, (err, rows) => {
        if (err) {
            response.json({
                message: 'Gagal Tersambung',
                data: err
            })
        } else {
            response.json({
                message: 'Tersambung',
                data: rows
            })
        }
    })
};

module.exports = {
    getAllDaftarProgram,
    createDaftarProgram
}