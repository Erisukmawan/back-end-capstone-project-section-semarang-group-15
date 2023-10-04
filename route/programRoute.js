const express = require('express');
const programController = require('../controller/programController.js');
const route = express.Router();

// Route to get all requests program 
route.get('/', programController.getAllProgram);

// Route to post all requests program
route.post('/', programController.createProgram);

module.exports = route;