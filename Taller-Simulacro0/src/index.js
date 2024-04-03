const express = require('express');
const bodyParser = require('body-parser');
const connectedDB = require('./config/database');
const routes = require('./routes');
const auth = require('./middleware/auth');

const app = express();
const port = 3000;

connectedDB();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(port, () => console.log(`Listening at http:localhost:${port}`));