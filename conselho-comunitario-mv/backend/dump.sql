CREATE DATABASE db_mv;

USE db_mv;

CREATE TABLE `user` (
	id_user INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(250),
    `password` VARCHAR(100)
);

CREATE TABLE news (
	id_news INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    `description` TEXT,
    posted DATE DEFAULT (CURRENT_DATE),
    id_user INT,
    
    FOREIGN KEY (id_user)
    REFERENCES `user` (id_user)
);

CREATE TABLE projeto (
    id_projeto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(150),
    `description` TEXT
);