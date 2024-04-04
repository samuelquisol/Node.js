const express = require('express');
const bodyParser = require('body-parser');
const connectedDB = require('./config/database');
const routes = require('./routes');

const app = express();
const port = 3000;

connectedDB();

app.use('/', routes);

app.listen(port, () => console.log(`Listening at https://localhost:${port}`))