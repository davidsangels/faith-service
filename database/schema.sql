DROP DATABASE related_listings;
CREATE DATABASE related_listings;

USE related_listings;

CREATE TABLE IF NOT EXISTS places (
    place_id INT AUTO_INCREMENT,
    place_image TEXT NOT NULL,
    place_location VARCHAR(255) NOT NULL,
    accommodation_type VARCHAR(255) NOT NULL,
    place_name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    rating FLOAT,
    PRIMARY KEY (place_id)
);

CREATE TABLE IF NOT EXISTS favourites (
    favourites_id INT AUTO_INCREMENT,
    listing_info TEXT NOT NULL,
    space_info TEXT NOT NULL,
    reviews TEXT NOT NULL,
    username VARCHAR(255) NOT NULL,
    review_date VARCHAR(255) NOT NULL,
    place_id INT UNSIGNED NOT NULL REFERENCES places(id),
    PRIMARY KEY (favourites_id)
);

-- remember to add foreign keys
-- mysql -uroot < ./database/schema.sql 
-- mysql -uroot (mysql environment)