const express = require('express');
const programController = require('../controller/programController.js');
const route = express.Router();


route.get('/', programController.getAllProgram);
route.post('/', programController.createProgram);

module.exports = route;