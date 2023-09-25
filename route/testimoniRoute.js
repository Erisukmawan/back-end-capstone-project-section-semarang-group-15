const express = require('express');
const testimoniController = require('../controller/testimoniController.js');
const route = express.Router();


route.get('/', testimoniController.getAllTestimoni);
route.post('/', testimoniController.createTestimoni);

module.exports = route;