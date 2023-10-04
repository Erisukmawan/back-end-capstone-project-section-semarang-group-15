const express = require('express');
const route = express.Router();
const daftarProgramController = require('../controller/daftarProgramController.js');

// Route to get all requests daftar program
route.get('/', daftarProgramController.getAlldaftarProgram);

// Route to post all requests daftar program
route.post('/', daftarProgramController.createdaftarProgram);

module.exports = route;