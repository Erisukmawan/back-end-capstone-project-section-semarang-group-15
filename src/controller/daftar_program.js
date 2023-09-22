const express = require('express');
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

module.exports = {
    getAllDaftarProgram,
    createDaftarProgram
}