const faker = require('faker');
const Sequelize = require('sequelize');
// const db = require('./index.js');

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


const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

const Place = sequelize.define('place', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  place_image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  place_location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  accommodation_type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  place_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});

const Favourite = sequelize.define('favourite', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  listing_info: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  space_info: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  reviews: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  review_date: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

// User.hasMany(Favourite);
// Favourite.belongsTo(User);
// Place.hasMany(Favourite);
// Favourite.belongsTo(Place);

const userRecords = [];
const placeRecords = [];
const favouriteRecords = [];
// const options = {validate: true, timestamps: false};

const placeType = ['ENTIRE HOUSE', 'ENTIRE VILLA', 'ENTIRE APARTMENT'];

for (let i = 0; i < 100; i += 1) {
  userRecords.push({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName()
  });
  placeRecords.push({
    place_image: faker.image.city(),
    place_location: faker.address.city(),
    accommodation_type: placeType[Math.floor(Math.random() * Math.floor(placeType.length))],
    place_name: faker.random.words(),
    price: Math.floor(Math.random() * Math.floor(1000)),
    rating: Math.floor(Math.random() * (6 - 1) + 1)
  });
  favouriteRecords.push({
    listing_info: faker.lorem.paragraph(),
    space_info: faker.lorem.paragraph(),
    reviews: faker.lorem.paragraph(),
    review_date: (faker.date.month())
      .concat(' ')
      .concat((Math.floor(Math.random() * (2019 - 2009) + 2009)).toString())
  });
}

// drop tables each time we run (so we only create 100 records per table)
User.drop();
Place.drop();
Favourite.drop();

User.sync().then(() => User.bulkCreate(userRecords)
  .then(() => User.findAll()).then((users) => {
    // console.log(users);
  }));

Place.sync().then(() => {
  Place.bulkCreate(placeRecords)
    .then(() => Place.findAll()).then((places) => {
      // console.log(places);
    });
});

Favourite.sync().then(() => {
  Favourite.bulkCreate(favouriteRecords)
    .then(() => Favourite.findAll()).then((favourites) => {
      // console.log(favourites);
    });
});

// need to close connection for seed to stop running?
// sequelize.close() gives errors
// (Unhandled rejection Error: pool is draining and cannot accept work)
// closing before finishing query -- not written in the right place
// sequelize.close().then(() => console.log('disconnecting gracefully'))

module.exports = {
  User,
  Place,
  Favourite
};
