// const faker = require('faker');

// for (let i = 0; i < 100; i++) {
//     `user${i}` = faker.fake("{{name.firstName}} {{name.lastName}}");
// }

//need to fix -- not using data.json
//perhaps use sequelize to save data to database

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
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'place'
});

class Favourite extends Model {}
Favourite.init({
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
Place.belongsToMany(Favourite);
Favourite.belongsTo(Place);

const placeType = ['ENTIRE HOUSE', 'ENTIRE VILLA', 'ENTIRE APARTMENT'];

User.sync({ force: true }).then(() => {
  return User.create({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName()
  });
});

Place.sync({ force: true }).then(() => {
  return Place.create({
    place_image = faker.image.city(),
    place_location = faker.address.city(),
    accommodation_type = placeType[Math.floor(Math.random * Math.floor(placeType.length))],
    place_name = faker.random.words(),
    price = Math.floor(Math.random * Math.floor(1000)),
    rating = Math.floor(Math.random() * (6 - 1) + 1)
  });
});

Favourite.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return Favourite.create({
    listing_info = faker.lorem.paragraph(),
    space_info = faker.lorem.paragraph(),
    reviews = faker.lorem.paragraphs(),
    review_date = faker.date.month()
  });
});

