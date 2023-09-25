const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const programRoutes = require('./src/routes/program.js');
const testimoniRoutes = require('./src/routes/testimoni.js');
const daftarProgramRoutes = require('./src/routes/daftar_program.js');
const kontakKamiRoutes = require('./src/routes/kontak_kami.js');
const middlewareLogRequest = require('./src/middleware/logs.js');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Untuk Middleware Log Request
app.use(middlewareLogRequest);

//Untuk mengizinkan request berupa json
app.use(express.json());


app.get('/', (request, response) => {
    response.send("Hallo Selamat Datang diserver Languago");
});

app.use('/api/program', programRoutes);

app.use('/api/testimoni', testimoniRoutes);

app.use('/api/daftar-program', daftarProgramRoutes);

app.use('/api/kontak-kami', kontakKamiRoutes);

app.get('/status', (request, response) => {
   const status = {
      "Status": "Running on port " + port,
   };
    response.send(status);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});