const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require('cors');

// Declare routes
const programRoutes = require('./route/programRoute.js');
const testimoniRoutes = require('./route/testimoniRoute.js');
const daftarProgramRoutes = require('./route/daftarProgramRoute.js');
const kontakKamiRoutes = require('./route/kontakKamiRoute.js');

// Configure body-parser to parse URL-encoded and JSON data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configure Express to parse JSON data
app.use(express.json());

// Enable CORS support
app.use(cors());

// To handle API requests
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

// For requests on ports
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});