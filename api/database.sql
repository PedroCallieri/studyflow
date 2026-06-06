CREATE DATABASE IF NOT EXISTS kennel_shop;
USE kennel_shop;

CREATE TABLE IF NOT EXISTS animals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    species VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO animals (name, species, age, price) VALUES
('Buddy', 'Golden Retriever', 2, 500.00),
('Mittens', 'Siamese Cat', 1, 200.00);
