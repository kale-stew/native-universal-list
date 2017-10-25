const express = require('express'),
      massive = require('massive'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      axios = require('axios');

// controllers
const item_controller = require('../controllers/item_controller');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

// massive(/*CONNECTION_STRING*/).then( db => {
//     app.set('db', db);
// }).catch( (err) => console.log(err) );

// item_controller calls
app.post('/api/items/', item_controller.add);
// app.get('/api/items/:id', item_controller.getOne);
app.get('/api/items/', item_controller.getAll);
// app.put('/api/items/?title='. item_controller.editTitle);
// app.delete('/api/items/:itemID', item_controller.delete);

const PORT = 3030;
app.listen( PORT, () => console.log(`Listening closely to ${PORT}`) );