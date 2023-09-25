const express = require('express');
const route = express.Router();
const daftarProgramController = require('../controller/daftarProgramController.js');

route.get('/', daftarProgramController.getAlldaftarProgram);

route.post('/', daftarProgramController.createdaftarProgram);

module.exports = route;