const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send("Hallo Selamat Datang diserver Languago");
});

app.get('/api/program', (request, response) => {
    connection.execute('SELECT * FROM program', (err, rows) => {
        if (err) {
            response.send({
                message: 'Gagal Tersambung',
                data: err
            })
        } else {
            response.send({
                message: 'Connection Success',
                data: rows
            })
        }
    })
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