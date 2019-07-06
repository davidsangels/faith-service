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

// CREATE TABLE IF NOT EXISTS favourites (
//   id INT AUTO_INCREMENT,
//   listing_info TEXT NOT NULL,
//   space_info TEXT NOT NULL,
//   reviews TEXT NOT NULL,
//   review_date VARCHAR(255) NOT NULL,
//   place_id INT UNSIGNED NOT NULL REFERENCES places(id),
//   id_users INT UNSIGNED NOT NULL REFERENCES users(id),
//   PRIMARY KEY (id)
// );

  // const placeType = ['ENTIRE HOUSE', 'ENTIRE VILLA', 'ENTIRE APARTMENT'];

  //   let place_image = faker.image.city();
  //   let place_location = faker.address.city();
  //   let accommodation_type = placeType[Math.floor(Math.random * Math.floor(placeType.length))];
  //   let place_name = faker.random.words();
  //   let price = `$${Math.floor(Math.random * Math.floor(1000))}/night`;
  //   let rating = Math.floor(Math.random() * (6 - 1) + 1);

  //   places.push({
  //       "place_id": id,
  //       "place_image": place_image,
  //       "place_location": place_location,
  //       "accommodation_type": accommodation_type,
  //       "place_name": place_name,
  //       "price": price,
  //       "rating": rating,
  //   });
  // }


