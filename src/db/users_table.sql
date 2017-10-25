CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    houseID INTEGER
);

-- information we are keeping from the users 