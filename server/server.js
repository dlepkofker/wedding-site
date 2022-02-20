const fs = require('fs');
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/guest/:guestId', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const guest = {
        id: parseInt(req.params.guestId)
    };

    res.send(JSON.stringify(guest));
});

app.get('/api/wedding/info', (req, res) => {
    res.sendFile('./wedding.json', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});