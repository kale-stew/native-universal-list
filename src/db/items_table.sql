CREATE TABLE IF NOT EXISTS Items (
    itemID SERIAL PRIMARY KEY,
    userID INTEGER REFERENCES Users(id),
    Name VARCHAR(100) NOT NULL,
    Price INTEGER,
    Category VARCHAR(100)
);

-- 'user' is a reserved name in Postgres, 'userID' is the workaround
-- could also encase user in "user"
-- only required data is name
-- itemID auto generated for every new item
-- userID references the users table