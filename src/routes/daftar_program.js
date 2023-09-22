const express = require('express');
const route = express.Router();
const connection = require('../config/database.js');
const daftarProgramController = require('../controller/daftar_program.js');

route.get('/', daftarProgramController.getAllDaftarProgram);

route.post('/', daftarProgramController.createDaftarProgram);

module.exports = route;