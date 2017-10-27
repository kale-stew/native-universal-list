const express = require('express'),
      massive = require('massive'),
      bodyParser = require('body-parser'),
      axios = require('axios');
      firebase = require('firebase');

// controllers
const item_controller = require('../controllers/item_controller');

const app = express();
app.use( bodyParser.json() );

// massive('postgres://jbimfewdfltfuv:e9fe8052c72fcfe88389c278a223a7cbea13fffcf4a111fa1f17da9390387df0@ec2-107-22-171-11.compute-1.amazonaws.com:5432/d4lv3n71ghtn5j?ssl=true')
//   .then( db => {
//     app.set('db', db);
//   })
//   .catch( (err) => console.log(err) );



// item_controller calls
// app.post('/api/items/', item_controller.add);
// app.get('/api/items?id=', item_controller.getOne);
app.get('/api/items/', item_controller.getAll);
// app.put('/api/items/:itemId?='. item_controller.editTitle);
// app.delete('/api/items/:itemId', item_controller.delete);

const PORT = 3030;
app.listen( PORT, () => console.log(`Listening closely to ${PORT}`) );