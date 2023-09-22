const express = require('express');
const route = express.Router();
const connection = require('../config/database.js');
const kontakKamiController = require('../controller/kontak_kami.js');

route.get('/', kontakKamiController.getAllKontakKami);

route.post('/', kontakKamiController.createKontakKami );

module.exports = route;