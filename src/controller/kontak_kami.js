const express = require('express');
const connection = require('../config/database.js');

const getAllKontakKami = (request, response) => {
    connection.execute('SELECT * FROM kontak_kami', (err, rows) => {
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

const createKontakKami = (request, response) => {
    connection.execute('SELECT * FROM kontak_kami', (err, rows) => {
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
    getAllKontakKami,
    createKontakKami
}