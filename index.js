const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/hai', (request, response) => {
    response.send('Hai');
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