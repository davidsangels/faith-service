DROP DATABASE related_listings;
CREATE DATABASE related_listings;

USE related_listings;

CREATE TABLE IF NOT EXISTS places (
    id INT AUTO_INCREMENT,
    place_image TEXT NOT NULL,
    place_location VARCHAR(255) NOT NULL,
    accommodation_type VARCHAR(255) NOT NULL,
    place_name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    rating FLOAT,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS favourites (
    id INT AUTO_INCREMENT,
    listing_info TEXT NOT NULL,
    space_info TEXT NOT NULL,
    reviews TEXT NOT NULL,
    review_date VARCHAR(255) NOT NULL,
    place_id INT UNSIGNED NOT NULL REFERENCES places(id),
    id_users INT UNSIGNED NOT NULL REFERENCES users(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    PRIMARY KEY (id)
)


-- remember to add foreign keys
-- mysql -uroot < ./database/schema.sql 
-- mysql -uroot (mysql environment)