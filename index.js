const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();
const port = process.env.PORT;

const programRoutes = require('./route/programRoute.js');
const testimoniRoutes = require('./route/testimoniRoute.js');
const daftarProgramRoutes = require('./route/daftarProgramRoute.js');
const kontakKamiRoutes = require('./route/kontakKamiRoute.js');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Untuk mengizinkan request berupa json
app.use(express.json());

const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));


app.get('/', (request, response) => {
    response.send("Hallo Selamat Datang diserver Languago");
});

app.use('/api/v1/program', programRoutes);

app.use('/api/v1/testimoni', testimoniRoutes);

app.use('/api/v1/daftar-program', daftarProgramRoutes);

app.use('/api/v1/kontak-kami', kontakKamiRoutes);

app.get('/status', (request, response) => {
   const status = {
       
      "Status": "Running on port " + port,
   };
    response.send(status);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});