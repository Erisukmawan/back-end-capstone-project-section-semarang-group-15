const express = require('express');
const route = express.Router();
const kontakKamiController = require('../controller/kontakKamiController.js');

route.get('/', kontakKamiController.getAllkontakKami);
route.post('/', kontakKamiController.createkontakKami );

module.exports = route;