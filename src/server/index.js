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