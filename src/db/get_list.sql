-- get all items to be rendered in list view upon login
-- all items where userid = $1 

SELECT *
FROM items 
WHERE userID = $1;