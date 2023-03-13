DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    movie_name VARCHAR(100) NOT NULL
);
CREATE TABLE reviews (
    id INT,
    movie_id INT NOT NULL,
    review TEXT NOT NULL,
    FOREIGN KEY (id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);
DESCRIBE movies;
DESCRIBE reviews;