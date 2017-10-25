const express = require('express'),
      massive = require('massive'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      axios = require('axios');

// controllers
//

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

// massive(/*CONNECTION_STRING*/).then( db => {
//     app.set('db', db);
// }).catch( (err) => console.log(err) );

// item_controller calls

const PORT = 3030;
app.listen( PORT, () => console.log(`Listening closely to ${PORT}`) );