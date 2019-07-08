const faker = require('faker');
const db = require('./index.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('related_listings', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
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
  sequelize,
  modelName: 'user'
});

class Place extends Model {}
Place.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
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
  sequelize,
  modelName: 'place'
});

class Favourite extends Model {}
Favourite.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  listing_info: {
    type: Sequelize.STRING,
    allowNull: false
  },
  space_info: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reviews: {
    type: Sequelize.STRING,
    allowNull: false
  },
  review_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'favourite'
});

User.hasMany(Favourite);
Favourite.belongsTo(User);
Place.hasMany(Favourite);
Favourite.belongsTo(Place);


// Format: Model.bulkCreate(records: Array, options: Object)
const userRecords = [];
const placeRecords = [];
const favouriteRecords = [];
const options = {validate: true, timestamps: false};

const placeType = ['ENTIRE HOUSE', 'ENTIRE VILLA', 'ENTIRE APARTMENT'];

for (let i = 0; i < 100; i++) {
  userRecords.push({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName()
  });
  placeRecords.push({
    place_image: faker.image.city(),
    place_location: faker.address.city(),
    accommodation_type: placeType[Math.floor(Math.random * Math.floor(placeType.length))],
    place_name: faker.random.words(),
    price: Math.floor(Math.random * Math.floor(1000)),
    rating: Math.floor(Math.random() * (6 - 1) + 1)
  });
  favouriteRecords.push({
    listing_info: faker.lorem.paragraph(),
    space_info: faker.lorem.paragraph(),
    reviews: faker.lorem.paragraphs(),
    review_date: faker.date.month()
  });
}

User.bulkCreate(userRecords)
  .then(() => {
    return User.findAll();
  }).then(users => {
    console.log(users)
  });

Place.bulkCreate(placeRecords)
  .then(() => {
    return Place.findAll();
  }).then(places => {
    console.log(places)
  });

Favourite.bulkCreate(favouriteRecords)
  .then(() => {
    return Favourite.findAll();
  }).then(favourites => {
    console.log(favourites)
  });
