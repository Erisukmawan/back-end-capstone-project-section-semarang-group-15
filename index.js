const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send('Halo ini adalah Halaman utama server Languago');
});

app.get('/program', (request, response) => {
    response.send('pogram 1');
});

app.get('/status', (request, response) => {
   const status = {
      "Status": "Running"
   };
    response.send(status);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});