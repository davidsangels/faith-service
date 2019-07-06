// const faker = require('faker');

// for (let i = 0; i < 100; i++) {
//     `user${i}` = faker.fake("{{name.firstName}} {{name.lastName}}");
// }

//need to fix -- not using data.json
//perhaps use sequelize to save data to database

const faker = require('faker');
const fs = require('fs')

function generatePlaces() {

  let places = [];
  const placeType = ['ENTIRE HOUSE', 'ENTIRE VILLA', 'ENTIRE APARTMENT'];

  for (let id=1; id <= 100; id++) {

    let place_image = faker.image.city();
    let place_location = faker.address.city();
    let accommodation_type = placeType[Math.floor(Math.random * Math.floor(placeType.length))];
    let place_name = faker.random.words();
    let price = `$${Math.floor(Math.random * Math.floor(1000))}/night`;
    let rating = Math.floor(Math.random() * (6 - 1) + 1);

    places.push({
        "place_id": id,
        "place_image": place_image,
        "place_location": place_location,
        "accommodation_type": accommodation_type,
        "place_name": place_name,
        "price": price,
        "rating": rating,
    });
  }

  return { "data": places }
}

let dataObj = generatePlaces();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));

