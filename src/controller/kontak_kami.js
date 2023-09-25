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
    const { id, nama, email, isi_pesan, date } = request.body;
    const query = 'INSERT INTO kontak_kami (id, nama, email, isi_pesan, date) VALUES (?, ?, ?, ?, ?)';
    const values = [id, nama, email, isi_pesan, date];
    connection.execute(query, values, (err, rows) => {
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