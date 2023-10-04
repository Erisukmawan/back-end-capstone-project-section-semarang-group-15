const express = require('express');
const route = express.Router();
const kontakKamiController = require('../controller/kontakKamiController.js');

// Route to get all requests kontak kami
route.get('/', kontakKamiController.getAllkontakKami);

// Route to post all requests kontak kami
route.post('/', kontakKamiController.createkontakKami );

module.exports = route;