const express = require('express');
const testimoniController = require('../controller/testimoniController.js');
const route = express.Router();

// Route to get all requests testimoni
route.get('/', testimoniController.getAllTestimoni);

// Route to post all requests testimoni
route.post('/', testimoniController.createTestimoni);

module.exports = route;