const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send('Halo ini adalah Halaman utama server Languago :)');
});

app.get('/api/program', (request, response) => {
    const program = {
        "Program Status": "All ready"
    };
    response.send(program);
});

app.get('/api/testimoni', (request, response) => {
    const testimoni = {
        "Testimoni Status": "All ready"
    };
    response.send(testimoni);
});

app.post('/api/daftar-program', (request, response) => {
    const daftar = {
        "Daftar Program Status": "All ready"
    };
    response.send(daftar);
});

app.post('/api/kontak-kami', (request, response) => {
    const kontak = {
        "Kontak Kami Status": "All ready"
    };
    response.send(kontak);
});

app.get('/status', (request, response) => {
   const status = {
      "Status": "Running"
   };
    response.send(status);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});