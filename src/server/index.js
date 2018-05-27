const express = require("express"),
const massive = require("massive"),
const bodyParser = require("body-parser"),
const axios = require("axios");
const firebase = require("firebase");

const item_controller = require("../controllers/item_controller");

const app = express();
app.use(bodyParser.json());

app.get("/api/items/", item_controller.getAll);

const PORT = 3030;
app.listen(PORT, () => console.log(`Listening closely to ${PORT}`));
