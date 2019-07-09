const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('../database/index.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/related_listings/places', (req, res) => {
  connection.query('SELECT * FROM places', (error, results) => {
    if (error) {
      throw error;
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
