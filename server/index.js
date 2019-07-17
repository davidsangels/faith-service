const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const connection = require('../database/index.js');
const Tables = require('../database/seed.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '/../public')));

// app.get('/', (req, res) => {
//   Tables.User.findAll().then(results => {
//     res.send(results);
//   }).catch(error => {
//     console.log(error);
//   });
// });

app.get('/testing', (req, res) => {
  Tables.Place.findAll().then((results) => {
    res.status(200).send(results);
  }).catch((error) => {
    console.log(error);
  });
});

// app.get('/related_listings/places', (req, res) => {
//   connection.query('SELECT * FROM places', (error, results) => {
//     if (error) {
//       throw error;
//     } else {
//       res.status(200).send(results);
//     }
//   });
// });

//   Tables.User.findAll().then((results) => {
//     res.send(results);
//   }).catch((error) => {
//     console.log(error);
//   });
// });

app.listen(port, () => console.log(`App listening on port ${port}!`));
