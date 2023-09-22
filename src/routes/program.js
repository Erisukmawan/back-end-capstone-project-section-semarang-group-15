const express = require('express');
const route = express.Router();
const connection = require('../config/database.js');

route.get('/', (request, response) =>{
    connection.execute('SELECT * FROM program', (err, rows) => {
        if (err) {
            response.send({
                message: 'Gagal Tersambung',
                data: err
            })
        } else {
            response.send(rows)
        }
    })
})

module.exports = route;