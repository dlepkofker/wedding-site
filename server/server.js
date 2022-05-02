const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/ping', (req, res) => {
  res.send('pong');
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

app.get('/savethedate', (req,res) => {
  res.sendFile(path.join(__dirname, '/client/build/savethedate.html'));
});

app.get('/', (req,res) => {
  // res.sendFile(path.join(__dirname, '/client/build/index.html'));
  res.send('<h1>Coming Soon!</h1>');
});

app.get('/*', (req,res) => {
  // res.sendFile(path.join(__dirname, '/client/build/index.html'));
  res.send('<h1>Coming Soon!</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});