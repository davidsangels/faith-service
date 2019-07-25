// Using MySQL to create connection
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'related_listings'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error(`error connecting: ${err.stack}`);
//     return;
//   }

//   console.log(`connected as id ${connection.threadId}`);
// });

// module.exports = connection;

// Using Sequelize
const Sequelize = require('sequelize');

const sequelize = new Sequelize('related_listings', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
