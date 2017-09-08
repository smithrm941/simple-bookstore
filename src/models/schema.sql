DROP DATABASE IF EXISTS bookstore;
CREATE DATABASE bookstore;

\c bookstore

CREATE TABLE book (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  author VARCHAR(255),
  genre VARCHAR(255),
  pages INTEGER,
  publisher VARCHAR(255)
);
